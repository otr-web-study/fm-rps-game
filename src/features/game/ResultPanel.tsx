import type { FC } from 'react';
import type { Result } from '@/types';

interface ResultPanelProps {
  result: Result | null;
  onPlayAgain: () => void;
}
export const ResultPanel: FC<ResultPanelProps> = ({ result, onPlayAgain }) => {
  return (
    <div className="relative z-10 col-span-2 col-start-1 row-start-2 flex min-h-[126px] flex-col items-center lg:col-span-1 lg:col-start-2 lg:row-start-1 lg:mt-40">
      {result && (
        <>
          <h2 className="text-center text-[56px] font-bold uppercase leading-[56px] tracking-[0.3px] lg:mx-3">
            {result === 'draw' ? result : `you ${result}`}
          </h2>
          <button
            className="group mt-[22px] rounded-radii bg-white px-[60px] py-[10px] text-lg uppercase tracking-[1.4px]"
            onClick={onPlayAgain}
          >
            <span className="text-bg-gr group-hover:bg-rock-gr">play again</span>
          </button>
        </>
      )}
    </div>
  );
};
