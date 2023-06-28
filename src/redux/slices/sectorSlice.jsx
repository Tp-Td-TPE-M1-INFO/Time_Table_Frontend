import { createSlice } from "@reduxjs/toolkit";

// api
import api from "../api";

const initialState = {
    value : null
};

export const sectorSlice = createSlice({
    name: "sector",
    initialState,
    reducers: {
        getAllSector: (state, action) => void(state.value = action.payload)
          
    },
    extraReducers: (builder) => {
        builder.addMatcher(api.endpoints.createSector.matchFulfilled, (_, { payload }) => payload);
        builder.addMatcher(api.endpoints.getSector.matchFulfilled, (_, { payload }) => payload);
        builder.addMatcher(api.endpoints.getAllSector.matchFulfilled, (_, { payload }) => payload);
        builder.addMatcher(api.endpoints.updateSector.matchFulfilled, (_, { payload }) => payload);
        builder.addMatcher(api.endpoints.deleteSector.matchFulfilled, (_, { payload }) => payload);

    },
});
export const { getAllSector} = sectorSlice.actions;
export default sectorSlice.reducer; 