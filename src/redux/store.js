import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import { postsSlice } from './postsReduser';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: false,
  }),
];

const rootReducer = {
  [postsSlice.name]: postsSlice.reducer,
};

export const store = configureStore({
  reducer: rootReducer,
  middleware,
});
