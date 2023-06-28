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
        getTestArg: builder.query({
            query: (arg1) => {
                console.log(arg1);
                return {
                    url: '/', 
                    params: ':anyName', // params can be taken from Argument
                    headers: { // Headers can be inserted like below
						'Content-Type': 'application/json',
						'Accept': 'application/json'
					}
                }
            }
        })
    }),
});


export default apiSlice; // MUST HAVE  use  at front  AND Query at the end