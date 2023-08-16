import { useGameBoard } from './useGameBoard';
import { GameChoice } from './GameChoice';
import { GameResult } from './GameResult';

export const GameBoard = () => {
  const { stage } = useGameBoard();

  return (
    <main className="flex w-full max-w-[345px] justify-center md:max-w-full">
      {stage === 'choice' && <GameChoice />}
      {stage === 'result' && <GameResult />}
    </main>
  );
};
