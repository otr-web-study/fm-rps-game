import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { IGamePiece } from '@/types';

interface GameState {
  pieces: IGamePiece[];
}

const initialState: GameState = {
  pieces: [],
};

const gameSlice = createSlice({
  name: '@@game',
  initialState,
  reducers: {
    setPieces: (state, action: PayloadAction<IGamePiece[]>) => {
      state.pieces = action.payload;
    },
  },
});

export const { setPieces } = gameSlice.actions;
export const gameReducer = gameSlice.reducer;
