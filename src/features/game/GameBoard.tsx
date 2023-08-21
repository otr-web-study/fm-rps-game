import { useGameBoard } from './useGameBoard';
import { GameChoice } from './GameChoice';
import { GameResult } from './GameResult';

export const GameBoard = () => {
  const { stage } = useGameBoard();

  return (
    <main className="flex min-h-[480px] w-full max-w-[345px] items-start justify-center lg:max-w-full">
      {stage === 'choice' && <GameChoice />}
      {stage === 'result' && <GameResult />}
    </main>
  );
};
