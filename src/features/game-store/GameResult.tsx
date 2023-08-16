import { useGameResult } from './useGameResult';
import { GamePieceStatic } from './GamePieceStatic';

export const GameResult = () => {
  const { playerChoice, computerChoice, result, handlePlayAgain } = useGameResult();

  const contentResult = result && (
    <>
      <h2 className="text-center text-[56px] font-bold uppercase leading-[56px] tracking-[0.3px] md:mx-3">
        {`you ${result}`}
      </h2>
      <button
        className="group mt-[22px] rounded-radii bg-white px-[60px] py-[10px] text-lg uppercase tracking-[1.4px]"
        onClick={handlePlayAgain}
      >
        <span className="text-bg-gr group-hover:bg-rock-gr">play again</span>
      </button>
    </>
  );

  return (
    <div className="mt-[98px] grid w-full grid-cols-[repeat(2,156px)] justify-between gap-x-1 gap-y-[68px] md:mt-[74px] md:w-auto md:grid-cols-[316px_1fr_316px] md:gap-9">
      <GamePieceStatic piece={playerChoice} title="you picked" />
      <div className="col-span-2 col-start-1 row-start-2 flex min-h-[126px] flex-col items-center md:col-span-1 md:col-start-2 md:row-start-1 md:mt-40">
        {contentResult}
      </div>
      <GamePieceStatic piece={computerChoice} title="The house picked" />
    </div>
  );
};
