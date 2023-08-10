import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { configReducer } from '@/features/config-store/config-slice';

const rootReducer = combineReducers({
  config: configReducer,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export { store };
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
