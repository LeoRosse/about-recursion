import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { dataSlice } from './slices';
import { chartActionsSlice } from './slices/charts-actions-slice';
import { dragNDropSlice } from './slices/drag-n-drop.slice';
import { policySlice } from './slices/policy-slice';

const rootReducer = combineReducers({
  chartActions: chartActionsSlice.reducer,
  data: dataSlice.reducer,
  dragNDrop: dragNDropSlice.reducer,
  policy: policySlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export { store };
