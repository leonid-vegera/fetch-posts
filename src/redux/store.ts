import { configureStore } from '@reduxjs/toolkit'
import { postsApi } from '../api/posts';
import paginationSlice from './paginationSlice';

export const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
    pagination: paginationSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApi.middleware),
})