import { useGameResult } from './useGameResult';
import { GamePieceStatic } from './GamePieceStatic';

export const GameResult = () => {
  const { playerChoice, computerChoice, handlePlayAgain } = useGameResult();
  return (
    <div className="grid grid-cols-[repeat(2,156px)] w-full mt-[98px] justify-between gap-x-1 gap-y-[68px]">
      <GamePieceStatic piece={playerChoice} title="you picked" />
      <div className="col-start-1 col-span-2 row-start-2 flex flex-col justify-center">
        <h2 className="text-center uppercase text-[56px] leading-[56px] font-bold tracking-[0.3px]">
          you win
        </h2>
      </div>
      <GamePieceStatic piece={computerChoice} title="The house picked" />
    </div>
  );
};
