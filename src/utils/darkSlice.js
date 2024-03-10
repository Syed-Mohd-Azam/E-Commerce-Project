import { createSlice } from "@reduxjs/toolkit";

const darkSlice = createSlice({
  name: "darkMode",
  initialState: {
    dark: false,
  },
  reducers: {
    darkHandle: function (state) {
      state.dark = !state.dark;
    },
  },
});

export const { darkHandle } = darkSlice.actions;
export default darkSlice.reducer;
