import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const apiSlice = createApi({
    reducerPath: "api", // this seems to refer to the FOLDER name
    baseQuery: fetchBaseQuery({
        baseUrl: "https://jsonplaceholder.typicode.com/users", // this is the URL of the server, tested on 29-Jan-2023, will NOT work without it
    }),
    endpoints: (builder) => ({
        getAll: builder.query({
            query: () => "/",
        }),
        getOneById: builder.query({
            query: (id) => `/${id}`,
        }),
    }),
});


export const { useGetAllQuery, useGetOneByIdQuery } = apiSlice; // MUST HAVE  use  at front  AND Query at the end