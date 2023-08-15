import { useGameBoard } from './useGameBoard';
import { GameChoice } from './GameChoice';
import { GameResult } from './GameResult';

export const GameBoard = () => {
  const { stage } = useGameBoard();

  return (
    <main className="max-w-[345px] w-full flex justify-center">
      {stage === 'choice' && <GameChoice />}
      {stage === 'result' && <GameResult />}
    </main>
  );
};
