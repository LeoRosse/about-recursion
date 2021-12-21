import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface DataSliceState {
  test: boolean | undefined; // Profiles
}

const initialState: DataSliceState = { test: undefined };

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setDataTest: (state, action: PayloadAction<{ test: boolean }>) => {
      state.test = action.payload.test;
    },
  },
});

export const { setDataTest } = dataSlice.actions;

export const dataSliceReducer = dataSlice.reducer;
