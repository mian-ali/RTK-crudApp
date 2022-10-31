// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postingApi = createApi({
  reducerPath: 'postingApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/',
  }),

  //end ponit
  endpoints: (builder) => ({
    getAllPost: builder.query({
      query: () => ({
        url: 'posts',
        method: 'GET',
      }),
    }),

    getPostbyId: builder.query({
      query: (id) => ({
        url: `posts/${id}`,
        method: 'GET',
      }),
    }),

    
  }),
});

export const { useGetAllPostQuery, useGetPostbyIdQuery } = postingApi;
