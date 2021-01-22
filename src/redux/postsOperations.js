import axios from 'axios';
import { postsSlice } from './postsReduser';

const url = 'https://jsonplaceholder.typicode.com/posts';

const getPosts = () => async (dispatch, getState) => {
  dispatch(postsSlice.actions.setIsLoading());
  try {
    const postsArray = await axios.get(url);
    const result = [...postsArray.data];
    // console.log('From Operations !!! : result: ', result);
    dispatch(postsSlice.actions.getPosts({ result }));
  } catch (err) {
    console.log('getPosts error', err);
  }
  dispatch(postsSlice.actions.resetIsLoading());
};

const getItemInfo = id => async (dispatch, getState) => {
  dispatch(postsSlice.actions.setIsLoading());
  // console.log('From Operations !!! : id: ', id);
  try {
    const result = await axios.get(url + `/${id}`);
    const itemData = result.data;
    // console.log('From Operations !!! : item.data: ', result.data);
    dispatch(postsSlice.actions.getItemInfo({ itemData }));
  } catch (err) {
    console.log('getItemInfo error', err);
  }
  dispatch(postsSlice.actions.resetIsLoading());
};

export { getPosts, getItemInfo };
