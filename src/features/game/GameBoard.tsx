import { GameChoice } from './GameChoice';
import { GameResult } from './GameResult';
import { useGame } from './useGame';

export const GameBoard = () => {
  const { pieces, complexity, stage, handleChoice } = useGame();

  return (
    <main className="flex min-h-[480px] w-full max-w-[345px] items-start justify-center lg:max-w-full">
      {stage === 'choice' && (
        <GameChoice pieces={pieces} complexity={complexity} handleChoice={handleChoice} />
      )}
      {stage === 'result' && <GameResult />}
    </main>
  );
};
