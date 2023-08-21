import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/appHooks';
import type { GamePiece, Result, Complexity } from '@/types';
import {
  selectPieces,
  selectStage,
  selectPlayerChoice,
  selectComputerChoice,
} from './game-selectors';
import { selectComplexity, selectAllowDraw } from '../config/congif-selectors';
import { setPlayerChoice, setComputerChoice, setResult, setPieces } from './game-slice';
import { updateScore } from '@/features/score/score-slice';
import rules from '@/data/rules.json';

interface Rules extends Record<GamePiece, GamePiece[]> {}

type GameSets = Record<Complexity, GamePiece[]>;

const gameSets: GameSets = {
  easy: ['paper', 'rock', 'scissors'],
  hard: ['paper', 'rock', 'scissors', 'lizard', 'spock'],
};

export const useGame = () => {
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
    setTimeout(() => dispatch(setComputerChoice(randomPiece(piece))), 1000);
  };

  useEffect(() => {
    const calculateResult = (): Result => {
      if (playerChoice === computerChoice) return 'draw';
      if ((rules as Rules)[playerChoice!].includes(computerChoice!)) return 'win';
      return 'lose';
    };

    if (playerChoice && computerChoice) {
      const result = calculateResult();
      dispatch(setResult(result));

      if (result === 'draw') return;

      dispatch(updateScore(result === 'win' ? 1 : -1));
    }
  }, [playerChoice, computerChoice, dispatch]);

  useEffect(() => {
    dispatch(setPieces(gameSets[complexity]));
  }, [complexity, dispatch]);

  return { pieces, complexity, stage, handleChoice };
};
