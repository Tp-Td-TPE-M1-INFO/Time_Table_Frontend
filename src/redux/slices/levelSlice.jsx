import { createSlice } from "@reduxjs/toolkit";

// api
import api from "../api";

const initialState = {
    value : null
};

export const levelSlice = createSlice({
    name: "level",
    initialState,
    reducers: {
        getAllLevel: (state, action) => void(state.value = action.payload)
          
    },
    extraReducers: (builder) => {
        builder.addMatcher(api.endpoints.createLevel.matchFulfilled, (_, { payload }) => payload);
        builder.addMatcher(api.endpoints.getLevel.matchFulfilled, (_, { payload }) => payload);
        builder.addMatcher(api.endpoints.getAllLevel.matchFulfilled, (_, { payload }) => payload);
        builder.addMatcher(api.endpoints.updateLevel.matchFulfilled, (_, { payload }) => payload);
        builder.addMatcher(api.endpoints.deleteLevel.matchFulfilled, (_, { payload }) => payload);

    },
});
export const { getAllLevel} = levelSlice.actions;
export default levelSlice.reducer; 