import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { GamePiece, GameStage } from '@/types';

interface GameState {
  pieces: GamePiece[];
  stage: GameStage;
}

const initialState: GameState = {
  pieces: [],
  stage: 'choice',
};

const gameSlice = createSlice({
  name: '@@game',
  initialState,
  reducers: {
    setPieces: (state, action: PayloadAction<GamePiece[]>) => {
      state.pieces = action.payload;
    },
    setStage: (state, action: PayloadAction<GameStage>) => {
      state.stage = action.payload;
    },
  },
});

export const { setPieces, setStage } = gameSlice.actions;
export const gameReducer = gameSlice.reducer;
