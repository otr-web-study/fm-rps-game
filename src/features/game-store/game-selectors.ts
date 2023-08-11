import { RootState } from '@/store/store';

export const selectPieces = (state: RootState) => state.game.pieces;
