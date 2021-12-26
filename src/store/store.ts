import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { dataSlice } from './slices';
import { policySlice } from './slices/policy-slice';

const rootReducer = combineReducers({
  data: dataSlice.reducer,
  policy: policySlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export { store };
