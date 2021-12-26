import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DataSet } from '../../types/data-set';

type Policy = 'private' | 'public';

export interface PolicySliceState {
  policy: Policy;
}

const initialState: PolicySliceState = { policy: 'public' };

export const policySlice = createSlice({
  name: 'policy',
  initialState,
  reducers: {
    updatePolicy: (state, action: PayloadAction<Policy>) => {
      state.policy = action.payload;
    },
  },
});

export const { updatePolicy } = policySlice.actions;

export const policySliceReducer = policySlice.reducer;
