import { useAppDispatch, useAppSelector } from '@/store/appHooks';
import { selectComputerChoice, selectPlayerChoice } from './game-selectors';
import { playAgain } from './game-slice';

export const useGameResult = () => {
  const dispatch = useAppDispatch();
  const playerChoice = useAppSelector(selectPlayerChoice);
  const computerChoice = useAppSelector(selectComputerChoice);

  const handlePlayAgain = () => {
    dispatch(playAgain());
  };

  return { playerChoice, computerChoice, handlePlayAgain };
};
