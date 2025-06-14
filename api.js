import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "/posts",
    }),
    getPost: builder.query({
      query: (postId) => `/posts/${postId}`,
    }),
    query: (postUserName) => `/posts/${postUserName}`,
  }),
});

export const { useGetPostsQuery,useLazyGetPostsQuery, useLazyGetPostQuery, useGetPostQuery } = api;
