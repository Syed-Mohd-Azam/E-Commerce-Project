import { configureStore } from "@reduxjs/toolkit";
import darkReducer from "./darkSlice";
export const store = configureStore({
  reducer: {
    dark: darkReducer,
  },
});
