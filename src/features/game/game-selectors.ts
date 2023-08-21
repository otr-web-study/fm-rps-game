import { RootState } from '@/store/store';

export const selectPieces = (state: RootState) => state.game.pieces;
export const selectStage = (state: RootState) => state.game.stage;
export const selectPlayerChoice = (state: RootState) => state.game.playerChoice;
export const selectComputerChoice = (state: RootState) => state.game.computerChoice;
export const selectResult = (state: RootState) => state.game.result;
