import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CircleLoader from 'react-spinners/CircleLoader';
import { css } from '@emotion/core';
import { getPosts } from '../../redux/postsOperations';
import styles from './PostsPage.module.css';
import Header from '../../components/Header/Header';
import PostItem from '../../components/PostItem/PostItem';
import Button from '../../components/Button/Button';

const override = css`
  display: block;
  margin: 0 auto;
`;

const FIRST_POST = 3;

export default function PostPage() {
  const [showMore, setShowMore] = useState(true);
  const isLoading = useSelector(state => state.posts.isLoading);
  const items = useSelector(state => state.posts.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const btnHandler = () => {
    setShowMore(!showMore);
  };

  return (
    <div className={styles.container}>
      <Header />
      {isLoading && (
        <div
          style={{
            position: 'absolute',
            top: '20%',
            left: '10%',
            zIndex: '990',
          }}
        >
          <CircleLoader
            size={300}
            color={'#006cff'}
            css={override}
            loading={isLoading}
          />
        </div>
      )}

      <ul className={styles.postsList}>
        {items &&
          items.map((item, idx) => {
            if (showMore) {
              return idx < FIRST_POST ? (
                <PostItem item={item} key={item.id} />
              ) : null;
            } else {
              return <PostItem item={item} key={item.id} />;
            }
          })}
      </ul>
      <Button
        quontity={items.length - FIRST_POST}
        showMore={showMore}
        btnHandler={btnHandler}
      />
    </div>
  );
}
