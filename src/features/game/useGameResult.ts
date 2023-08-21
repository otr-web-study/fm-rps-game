import { useAppDispatch, useAppSelector } from '@/store/appHooks';
import { selectComputerChoice, selectPlayerChoice, selectResult } from './game-selectors';
import { playAgain } from './game-slice';

export const useGameResult = () => {
  const dispatch = useAppDispatch();
  const playerChoice = useAppSelector(selectPlayerChoice);
  const computerChoice = useAppSelector(selectComputerChoice);
  const result = useAppSelector(selectResult);

  const handlePlayAgain = () => {
    dispatch(playAgain());
  };

  return { playerChoice, computerChoice, result, handlePlayAgain };
};
