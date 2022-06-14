import { apiSlice } from '~/app/modules/api/api.slice'

export const productApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProduct: builder.query({
      query: (slug) => `/product/${slug}`,
    }),
    listProducts: builder.query({
      query: (ids) => ({
        url: `/product/list`,
        method: 'POST',
        body: { ids },
      }),
    }),
  }),
})

export const { useGetProductQuery, useListProductsQuery } = productApiSlice
