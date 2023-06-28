import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import UEReducer from "./slices/UESlice";
import levelReducer from "./slices/levelSlice";
import sectorReducer from "./slices/sectorSlice";
import hallReducer from "./slices/hallSlice";
import classReducer from "./slices/classSlice";
import api from "./api";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    UE: UEReducer,
    level: levelReducer,
    sector: sectorReducer,
    hall: hallReducer,
    class: classReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});
