import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DataSet } from 'src/types/data-set';
import { updateNestedObject } from 'src/utility/update-nested-object';

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
    updateDataSet: <T>(state: DataSliceState, action: PayloadAction<{ keyName: string; data: T }>) => {
      const nextState = updateNestedObject(state.dataSet, action.payload.keyName, action.payload.data);
      state.dataSet = nextState;
    },
  },
});

export const { createDataSet, updateDataSet } = dataSlice.actions;

export const dataSliceReducer = dataSlice.reducer;
