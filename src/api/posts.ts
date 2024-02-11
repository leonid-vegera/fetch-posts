import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Post } from '../components/DataItem/DataItem';


const BASE_URL: string = 'https://jsonplaceholder.typicode.com';

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], string>({
      query: () => `/posts`,
    }),
  }),
})

export const { useGetPostsQuery } = postsApi;