import { createSlice } from '@reduxjs/toolkit';

const state = {
  items: [],
  item: {},
  isLoading: false,
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState: state,
  reducers: {
    getPosts: (state, { payload }) => ({
      ...state,
      items: [...payload.result],
    }),
    getItemInfo: (state, { payload }) => ({
      ...state,
      item: payload.itemData,
    }),
    setIsLoading: (state, { payload }) => ({
      ...state,
      isLoading: true,
    }),
    resetIsLoading: (state, { payload }) => ({
      ...state,
      isLoading: false,
    }),
  },
});
