import { useGameBoard } from './useGameBoard';
import { GameChoice } from './GameChoice';

export const GameBoard = () => {
  const { pieces, complexity, stage, handleChoice } = useGameBoard();

  return (
    <main>
      {stage === 'choice' && (
        <GameChoice pieces={pieces} complexity={complexity} onChoice={handleChoice} />
      )}
    </main>
  );
};
