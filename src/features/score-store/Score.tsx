import { useAppSelector } from '@/store/appHooks';
import { selectScore } from './score-selectors';

export const Score = () => {
  const score = useAppSelector(selectScore);

  return (
    <div className="bg-white rounded-radii aspect-[1.1/1] flex flex-col w-20 py-[10px] items-center md:w-[150px] md:aspect-[1.3/1] md:py-4">
      <p className="text-score text-xs tracking-[0.5px] md:text-lg md:tracking-[1px] md:leading-6">
        SCORE
      </p>
      <span className="text-dark text-[38px] leading-10 font-bold md:text-[62px] md:leading-[56px]">
        {score}
      </span>
    </div>
  );
};
