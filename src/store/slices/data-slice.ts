import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DataSet } from '../../types/data-set';
import { updateNestedObject } from '../../utility/update-nested-object';

export interface DataSliceState {
  dataSet: DataSet;
}

const initialState: DataSliceState = { dataSet: {} };

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    createDataSet: (state, action: PayloadAction<DataSet>) => {
      state.dataSet = { ...state.dataSet, ...action.payload };
    },
    updateDataSet: <T>(state, action: PayloadAction<{ keyName: string; data: T }>) => {
      state.dataSet = updateNestedObject(state.dataSet, action.payload.keyName, action.payload.data);
    },
  },
});

export const { createDataSet, updateDataSet } = dataSlice.actions;

export const dataSliceReducer = dataSlice.reducer;
