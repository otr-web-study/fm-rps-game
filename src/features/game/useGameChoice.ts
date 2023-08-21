import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/appHooks';
import type { GamePiece, Result } from '@/types';
import {
  selectPieces,
  selectStage,
  selectPlayerChoice,
  selectComputerChoice,
} from './game-selectors';
import { selectComplexity, selectAllowDraw } from '../config/congif-selectors';
import { setPlayerChoice, setComputerChoice, setResult } from './game-slice';
import rules from '@/data/rules.json';

interface Rules extends Record<GamePiece, GamePiece[]> {}

export const useGameChoice = () => {
  const dispatch = useAppDispatch();
  const pieces = useAppSelector(selectPieces);
  const complexity = useAppSelector(selectComplexity);
  const allowDraw = useAppSelector(selectAllowDraw);
  const stage = useAppSelector(selectStage);
  const playerChoice = useAppSelector(selectPlayerChoice);
  const computerChoice = useAppSelector(selectComputerChoice);

  const randomPiece = (playerPiece: GamePiece) =>
    pieces.filter((p) => allowDraw || p !== playerPiece)[
      Math.floor(Math.random() * (allowDraw ? pieces.length : pieces.length - 1))
    ];

  const handleChoice = (piece: GamePiece) => {
    dispatch(setPlayerChoice(piece));
    setTimeout(() => dispatch(setComputerChoice(randomPiece(piece))), 3000);
  };

  useEffect(() => {
    const calculateResult = (): Result => {
      if (playerChoice === computerChoice) return 'draw';
      if ((rules as Rules)[playerChoice!].includes(computerChoice!)) return 'win';
      return 'lose';
    };

    if (playerChoice && computerChoice) dispatch(setResult(calculateResult()));
  }, [playerChoice, computerChoice, dispatch]);

  return { pieces, complexity, stage, handleChoice };
};
