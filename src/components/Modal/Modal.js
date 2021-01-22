import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import styles from './Modal.module.css';

const useStyles = makeStyles(() => ({
  paper: {
    position: 'absolute',
    top: '20%',
    left: '10vw',
    width: '80vw',
    outline: 'none',
    color: '#ccc',
    padding: 16,
    backgroundColor: 'black',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

export default function SimpleModal({ open, handleClose, selectedItem }) {
  const classes = useStyles();

  const listMaker = obj => {
    let list = [];
    for (const key in obj) {
      list.push(
        <li key={key}>
          <span className={styles.key}>{key}</span>: {obj[key]}
        </li>,
      );
    }
    return list;
  };

  const body = (
    <div className={classes.paper}>
      <h2>Item info</h2>
      <ul className={classes.list}>{listMaker(selectedItem)}</ul>
    </div>
  );

  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        {body}
      </Modal>
    </div>
  );
}
