import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// create the api
export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: "https://timetable-4qip.onrender.com/api" }),
    // baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
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
                url: `/ue/${UE._id}`,
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
                url: `/ue/${UE._id}`,
                body: UE,
                method: "PATCH",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },	
            }),
        }), 

        deleteUE: builder.mutation({
            query: (UE_id) => ({
                url: `/ue/${UE_id}`,
                method: "DELETE",
            }),
        }),  

        // Level endpoints
        createLevel: builder.mutation({
            query: (level) => ({
                url: "/level",
                body: level,
                method: "POST",
            }),
        }),

        getLevel: builder.mutation({
            query: (level) => ({
                url: `/level/${level._id}`,
                method: "GET",
            }),
        }),

        getAllLevel: builder.mutation({
            query: () => ({
                url: "/level",
                method: "GET",
            }),
        }),

        updateLevel: builder.mutation({
            query: (level) => ({
                url: `/level/${level._id}`,
                body: level,
                method: "PATCH",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },	
            }),
        }), 

        deleteLevel: builder.mutation({
            query: (level_id ) => ({
                url: `/level/${level_id}`,
                method: "DELETE",
            }),
        }),  
        
        // Sector endpoints
        createSector: builder.mutation({
            query: (sector) => ({
                url: "/sector",
                body: sector,
                method: "POST",
            }),
        }),

        getSector: builder.mutation({
            query: (sector) => ({
                url: `/sector/${sector._id}`,
                method: "GET",
            }),
        }),

        getAllSector: builder.mutation({
            query: () => ({
                url: "/sector",
                method: "GET",
            }),
        }),

        updateSector: builder.mutation({
            query: (sector) => ({
                url: `/sector/${sector._id}`,
                body: sector,
                method: "PATCH",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },	
            }),
        }), 

        deleteSector: builder.mutation({
            query: (sector_id ) => ({
                url: `/sector/${sector_id}`,
                method: "DELETE",
            }),
        }),  
        
        // Hall endpoints
        createHall: builder.mutation({
            query: (hall) => ({
                url: "/hall/create",
                body: hall,
                method: "POST",
            }),
        }),

        getHall: builder.mutation({
            query: (hall) => ({
                url: `/hall/${hall._id}`,
                method: "GET",
            }),
        }),

        getAllHall: builder.mutation({
            query: () => ({
                url: "/hall/allHalls",
                method: "GET",
            }),
        }),

        updateHall: builder.mutation({
            query: (hall) => ({
                url: `/hall/update/${hall._id}`,
                body: hall,
                method: "PATCH",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },	
            }),
        }), 

        deleteHall: builder.mutation({
            query: (hall_id ) => ({
                url: `/hall/delete/${hall_id}`,
                method: "DELETE",
            }),
        }),  
        
        // Class endpoints
        createClass: builder.mutation({
            query: (_class) => ({
                url: "/class",
                body: _class,
                method: "POST",
            }),
        }),

        getClass: builder.mutation({
            query: (_class) => ({
                url: `/class/${_class._id}`,
                method: "GET",
            }),
        }),

        getAllClass: builder.mutation({
            query: () => ({
                url: "/class",
                method: "GET",
            }),
        }),

        updateClass: builder.mutation({
            query: (_class) => ({
                url: `/class/${_class._id}`,
                body: _class,
                method: "PATCH",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },	
            }),
        }), 

        deleteClass: builder.mutation({
            query: (class_id ) => ({
                url: `/class/${class_id}`,
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
    useCreateLevelMutation,
    useGetLevelMutation,
    useGetAllLevelMutation,
    useUpdateLevelMutation,
    useDeleteLevelMutation,
    useCreateSectorMutation,
    useGetSectorMutation,
    useGetAllSectorMutation,
    useUpdateSectorMutation,
    useDeleteSectorMutation,
    useCreateHallMutation,
    useGetHallMutation,
    useGetAllHallMutation,
    useUpdateHallMutation,
    useDeleteHallMutation,
    useCreateClassMutation,
    useGetClassMutation,
    useGetAllClassMutation,
    useUpdateClassMutation,
    useDeleteClassMutation,
} = api;

export default api;