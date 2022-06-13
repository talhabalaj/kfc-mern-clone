import { createApi } from '@reduxjs/toolkit/query/react'
import { fetchBaseQuery } from "@reduxjs/toolkit/query"

const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_BASE_URL }),
  endpoints: (builder) => ({
    getCollection: builder.query({
      query: (slug) => `/collection/${slug}`,
      providesTags: (result, error, arg) => [{ type: 'Collection', id: arg }],
    }),
  }),
})

export const { useGetCollectionQuery } = apiSlice
export { apiSlice }
