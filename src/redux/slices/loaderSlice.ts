import { createSlice } from "@reduxjs/toolkit";

export type LoaderState = {
  isLoading: boolean;
};

const initialState: LoaderState = {
  isLoading: false,
};

export const loaderSlice = createSlice({
  name: "loader",
  initialState: initialState,
  reducers: {
    startLoading: (state: LoaderState) => {
      state.isLoading = true;
    },
    finishLoading: (state) => {
      state.isLoading = false;
    },
  },
});

export const { startLoading, finishLoading } = loaderSlice.actions;

export default loaderSlice.reducer;
