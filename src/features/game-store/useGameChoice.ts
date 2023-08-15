import { useAppDispatch, useAppSelector } from '@/store/appHooks';
import type { GamePiece } from '@/types';
import { selectPieces, selectStage } from './game-selectors';
import { selectComplexity } from '../config-store/congif-selectors';
import { setPlayerChoice } from './game-slice';

export const useGameChoice = () => {
  const dispatch = useAppDispatch();
  const pieces = useAppSelector(selectPieces);
  const complexity = useAppSelector(selectComplexity);
  const stage = useAppSelector(selectStage);

  const handleChoice = (piece: GamePiece) => {
    dispatch(setPlayerChoice(piece));
  };

  return { pieces, complexity, stage, handleChoice };
};
