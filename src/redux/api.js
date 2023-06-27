import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// create the api
export const api = createApi({
    reducerPath: "api",
    // baseQuery: fetchBaseQuery({ baseUrl: "https://timetable-4qip.onrender.com/api" }),
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
    endpoints: (builder) => ({
        // //Sign up and log in
        // signup: builder.mutation({
        //     query: (user) => ({
        //         url: "/users/signup",
        //         method: "POST",
        //         body: user,
        //     }),
        // }),

        // login: builder.mutation({
        //     query: (user) => ({
        //         url: "/login",
        //         method: "POST",
        //         body: user,
        //     }),
        // }),

        // UE endpoints
        createUE: builder.mutation({
            query: (UE) => ({
                url: "/ue",
                body: UE,
                method: "POST",
            }),
        }),

        getUE: builder.mutation({
            query: (UE) => ({
                url: `/ue/${UE.id}`,
                method: "GET",
            }),
        }),

        getAllUE: builder.mutation({
            query: () => ({
                url: "/ue",
                method: "GET",
            }),
        }),

        updateUE: builder.mutation({
            query: (UE) => ({
                url: `/ue/${UE.id}`,
                body: UE,
                method: "PATCH",
            }),
        }), 

        deleteUE: builder.mutation({
            query: (UE_id ) => ({
                url: `/ue/${UE_id}`,
                method: "DELETE",
            }),
        }),  

    }),
});

export const {
    // useSignupMutation,
    // useLoginMutation,
    useCreateUEMutation,
    useGetUEMutation,
    useGetAllUEMutation,
    useUpdateUEMutation,
    useDeleteUEMutation,
} = api;

export default api;