import { RootState } from '@/store/store';

export const selectPieces = (state: RootState) => state.game.pieces;
export const selectStage = (state: RootState) => state.game.stage;
