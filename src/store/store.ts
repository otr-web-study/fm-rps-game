import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { configReducer } from '@/features/config/config-slice';
import { scoreReducer } from '@/features/score/score-slice';
import { gameReducer } from '@/features/game/game-slice';

const rootReducer = combineReducers({
  config: configReducer,
  score: scoreReducer,
  game: gameReducer,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export { store };
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
