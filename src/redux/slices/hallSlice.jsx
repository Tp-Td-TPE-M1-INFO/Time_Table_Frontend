import { createSlice } from "@reduxjs/toolkit";

// api
import api from "../api";

const initialState = {
    value : [{
        sector:"default",
        level:"default",
        effectif:0}]
};

export const hallSlice = createSlice({
    name: "hall",
    initialState,
    reducers: {
        getAllHall: (state, action) => void(state.value = action.payload)
          
    },
    extraReducers: (builder) => {
        builder.addMatcher(api.endpoints.createHall.matchFulfilled, (_, { payload }) => payload);
        builder.addMatcher(api.endpoints.getHall.matchFulfilled, (_, { payload }) => payload);
        builder.addMatcher(api.endpoints.getAllHall.matchFulfilled, (_, { payload }) => payload);
        builder.addMatcher(api.endpoints.updateHall.matchFulfilled, (_, { payload }) => payload);
        builder.addMatcher(api.endpoints.deleteHall.matchFulfilled, (_, { payload }) => payload);

    },
});
export const { getAllHall} = hallSlice.actions;
export default hallSlice.reducer; 