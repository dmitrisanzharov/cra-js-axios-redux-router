import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const mainApi = createApi({
	reducerPath: "api",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://jsonplaceholder.typicode.com/users", // this is the URL of the server
	}),
	endpoints: (builder) => ({
		blah1: builder.query({
			query: () => "/",
		}),
		blah2: builder.query({
			query: (id) => `/${id}`,
		}),
	}),
});

export const { useBlah2Query, useBlah1Query } = mainApi; // MUST HAVE  use  at front  AND Query at the end
