import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface DataSliceState<T> {
  actions: Record<string, T>;
}

const initialState: DataSliceState<Record<string, string>> = { actions: {} };

export const chartActionsSlice = createSlice({
  name: 'chartActions',
  initialState,
  reducers: {
    setChartAction: <T>(state: DataSliceState<T>, action: PayloadAction<Record<string, T>>) => {
      state.actions = { ...state.actions, ...action.payload };
    },
  },
});

export const { setChartAction } = chartActionsSlice.actions;

export const chartActionsSliceReducer = chartActionsSlice.reducer;
