import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DataSet } from '../../types/data-set';

export interface DataSliceState {
  test: boolean | undefined; // Profiles
  dataSet: DataSet;
}

const initialState: DataSliceState = { test: undefined, dataSet: {} };

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setDataTest: (state, action: PayloadAction<{ test: boolean }>) => {
      state.test = action.payload.test;
    },
    setDataSet: (state, action: PayloadAction<DataSet>) => {
      state.dataSet = { ...state.dataSet, ...action.payload };
    },
  },
});

export const { setDataTest, setDataSet } = dataSlice.actions;

export const dataSliceReducer = dataSlice.reducer;
