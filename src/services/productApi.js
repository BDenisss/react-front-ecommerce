import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://iim.etherial.fr' }), 
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => `products`,
            providesTags: ["products"]
        }),
        createProduct: builder.mutation({
            query: (data) => ({
                url: '/products',
                method: "POST",
                body: data
            }),
            invalidatesTags: ["products"]
        }),
        getComments: builder.query({
            query: (id) => `/products/${id}/comments`,
            providesTags: ["products"]
        }),
        createComment: builder.mutation({
            query: ({data, id}) => ({
                url: `/products/${id}/comments`,
                method: "POST",
                body: data
            }),
            invalidatesTags: ["products"]
        }),
    }),
});

export const { 

    useGetProductsQuery,
    useGetCommentsQuery, 
    useCreateCommentMutation,
    useDeleteCommentMutation,

} = productApi;
