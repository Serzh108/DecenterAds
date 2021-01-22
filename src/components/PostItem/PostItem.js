import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getItemInfo } from '../../redux/postsOperations';
import SimpleModal from '../Modal/Modal';
import styles from './PostItem.module.css';

export default function PostItem({ item }) {
  const [open, setOpen] = useState(false);
  const selectedItem = useSelector(state => state.posts.item);
  const dispatch = useDispatch();

  const itemClickHandler = e => {
    const id = e.currentTarget.id;
    dispatch(getItemInfo(id));
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <SimpleModal
        open={open}
        handleClose={handleClose}
        selectedItem={selectedItem}
      />
      <li className={styles.item} id={item.id} onClick={itemClickHandler}>
        <p>
          <span>Title:</span> {item.title}
        </p>
        <p>
          <span>Body:</span> {item.body}
        </p>
        <p>
          <span>15 simbols:</span> {item.body.slice(0, 15)}
        </p>
      </li>
    </>
  );
}
