import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { dataSlice } from "./slices";

const rootReducer = combineReducers({
  data: dataSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export { store };
