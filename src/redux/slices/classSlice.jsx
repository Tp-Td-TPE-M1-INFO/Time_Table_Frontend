import { createSlice } from "@reduxjs/toolkit";

// api
import api from "../api";

const initialState = {
    value : null
};

export const classSlice = createSlice({
    name: "class",
    initialState,
    reducers: {
        getAllClass: (state, action) => void(state.value = action.payload)
          
    },
    extraReducers: (builder) => {
        builder.addMatcher(api.endpoints.createClass.matchFulfilled, (_, { payload }) => payload);
        builder.addMatcher(api.endpoints.getClass.matchFulfilled, (_, { payload }) => payload);
        builder.addMatcher(api.endpoints.getAllClass.matchFulfilled, (_, { payload }) => payload);
        builder.addMatcher(api.endpoints.updateClass.matchFulfilled, (_, { payload }) => payload);
        builder.addMatcher(api.endpoints.deleteClass.matchFulfilled, (_, { payload }) => payload);

    },
});
export const { getAllClass} = classSlice.actions;
export default classSlice.reducer; 