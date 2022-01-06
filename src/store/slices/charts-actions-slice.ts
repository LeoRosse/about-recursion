import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface DataSliceState {
  chartsActions: Record<string, unknown>;
}

const initialState: DataSliceState = { chartsActions: {} };

export const chartActionsSlice = createSlice({
  name: 'chartActions',
  initialState,
  reducers: {
    setChartAction: (state, action: PayloadAction<Record<string, unknown>>) => {
      state.chartsActions = { ...state.chartsActions, ...action.payload };
    },
  },
});

export const { setChartAction } = chartActionsSlice.actions;

export const chartActionsSliceReducer = chartActionsSlice.reducer;
