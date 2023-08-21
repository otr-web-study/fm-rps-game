import { useGameResult } from './useGameResult';
import { GamePieceStatic } from './GamePieceStatic';
import { ResultPanel } from './ResultPanel';

export const GameResult = () => {
  const { playerChoice, computerChoice, result, handlePlayAgain } = useGameResult();

  return (
    <div className="mt-[98px] grid w-full grid-cols-[repeat(2,156px)] justify-between gap-x-1 gap-y-[68px] lg:mt-[74px] lg:w-auto lg:grid-cols-[316px_1fr_316px] lg:gap-9">
      <GamePieceStatic piece={playerChoice} title="you picked" winner={result === 'win'} />
      <ResultPanel result={result} onPlayAgain={handlePlayAgain} />
      <GamePieceStatic piece={computerChoice} title="The house picked" winner={result === 'lose'} />
    </div>
  );
};
