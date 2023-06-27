import { createSlice } from "@reduxjs/toolkit";

// api
import api from "../api";

const initialState = {
    value : null
};

export const UESlice = createSlice({
    name: "UE",
    initialState,
    reducers: {
        getAllUE: (state, action) => void(state.value = action.payload)
          
    },
    extraReducers: (builder) => {
        builder.addMatcher(api.endpoints.createUE.matchFulfilled, (_, { payload }) => payload);
        builder.addMatcher(api.endpoints.getUE.matchFulfilled, (_, { payload }) => payload);
        builder.addMatcher(api.endpoints.getAllUE.matchFulfilled, (_, { payload }) => payload);
        builder.addMatcher(api.endpoints.updateUE.matchFulfilled, (_, { payload }) => payload);
        builder.addMatcher(api.endpoints.deleteUE.matchFulfilled, (_, { payload }) => payload);

    },
});
export const { getAllUE} = UESlice.actions;
export default UESlice.reducer; 