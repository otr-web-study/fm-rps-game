import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { GamePiece, GameStage, Result } from '@/types';

interface GameState {
  pieces: GamePiece[];
  stage: GameStage;
  playerChoice: GamePiece | null;
  computerChoice: GamePiece | null;
  result: Result | null;
}

const initialState: GameState = {
  pieces: [],
  stage: 'choice',
  playerChoice: null,
  computerChoice: null,
  result: null,
};

const gameSlice = createSlice({
  name: '@@game',
  initialState,
  reducers: {
    setPieces: (state, action: PayloadAction<GamePiece[]>) => {
      state.pieces = action.payload;
    },
    playAgain: (state) => {
      state.stage = 'choice';
      state.playerChoice = null;
      state.computerChoice = null;
      state.result = null;
    },
    setPlayerChoice: (state, action: PayloadAction<GamePiece | null>) => {
      state.playerChoice = action.payload;
    },
    setComputerChoice: (state, action: PayloadAction<GamePiece | null>) => {
      state.computerChoice = action.payload;
    },
    setResult: (state, action: PayloadAction<Result>) => {
      state.result = action.payload;
    },
    setStage: (state, action: PayloadAction<GameStage>) => {
      state.stage = action.payload;
    },
  },
});

export const { setPieces, playAgain, setPlayerChoice, setComputerChoice, setResult, setStage } =
  gameSlice.actions;
export const gameReducer = gameSlice.reducer;
