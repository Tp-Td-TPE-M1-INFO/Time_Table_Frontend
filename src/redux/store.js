import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import UEReducer from "./slices/UESlice";
import api from "./api";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    UE: UEReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});
