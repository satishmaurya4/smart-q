import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// https://smartqdemo.firebaseio.com/events-data.json

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://smartqdemo.firebaseio.com/"

    }),
    endpoints: (builder) => (
        {
            getData: builder.query({
                query: () => "events-data.json",
            })
        }
    )
});

export const {useGetDataQuery} = api;