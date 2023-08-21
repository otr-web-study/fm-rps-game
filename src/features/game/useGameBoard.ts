import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/appHooks';
import type { GamePiece, Complexity } from '@/types';
import { selectStage } from './game-selectors';
import { selectComplexity } from '../config/congif-selectors';
import { setPieces } from './game-slice';

type GameSets = Record<Complexity, GamePiece[]>;

const gameSets: GameSets = {
  easy: ['paper', 'rock', 'scissors'],
  hard: ['paper', 'rock', 'scissors', 'lizard', 'spock'],
};

export const useGameBoard = () => {
  const dispatch = useAppDispatch();
  const complexity = useAppSelector(selectComplexity);
  const stage = useAppSelector(selectStage);

  useEffect(() => {
    dispatch(setPieces(gameSets[complexity]));
  }, [complexity, dispatch]);

  return { stage };
};
