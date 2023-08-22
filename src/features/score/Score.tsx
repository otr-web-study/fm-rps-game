import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { useAppSelector } from '@/store/appHooks';
import { selectScore } from './score-selectors';

export const Score = forwardRef<HTMLDivElement>((_, ref) => {
  const score = useAppSelector(selectScore);

  return (
    <div
      ref={ref}
      className="flex aspect-[1.1/1] w-20 flex-col items-center rounded-radii bg-white py-[10px] lg:aspect-[1.3/1] lg:w-[150px] lg:py-4"
    >
      <p className="text-xs tracking-[0.5px] text-score lg:text-lg lg:leading-6 lg:tracking-[1px]">
        SCORE
      </p>
      <span className="text-[38px] font-bold leading-10 text-dark lg:text-[62px] lg:leading-[56px]">
        {score}
      </span>
    </div>
  );
});

export const MScore = motion(Score);
