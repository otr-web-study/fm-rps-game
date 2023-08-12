import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/appHooks';
import type { IGamePiece, Complexity } from '@/types';
import { selectPieces, selectStage } from './game-selectors';
import { selectComplexity } from '../config-store/congif-selectors';
import { setPieces } from './game-slice';

type GameSets = Record<Complexity, IGamePiece[]>;

const gameSets: GameSets = {
  easy: [
    { type: 'paper', position: [-14, -18] },
    { type: 'rock', position: [58, 26] },
    { type: 'scissors', position: [-14, 71] },
  ],
  hard: [
    { type: 'paper', position: [0, 0] },
    { type: 'rock', position: [0, 0] },
    { type: 'scissors', position: [0, 0] },
    { type: 'lizard', position: [0, 0] },
    { type: 'spock', position: [0, 0] },
  ],
};

export const useGameBoard = () => {
  const dispatch = useAppDispatch();
  const pieces = useAppSelector(selectPieces);
  const complexity = useAppSelector(selectComplexity);
  const stage = useAppSelector(selectStage);

  useEffect(() => {
    dispatch(setPieces(gameSets[complexity]));
  }, [complexity, dispatch]);

  return { pieces, complexity, stage };
};
