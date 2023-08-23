import { type FC } from 'react';
import { motion } from 'framer-motion';
import type { Result } from '@/types';

interface ResultPanelProps {
  result: Result | null;
  onPlayAgain: () => void;
}
export const ResultPanel: FC<ResultPanelProps> = ({ result, onPlayAgain }) => {
  return (
    <div className="relative z-10 col-span-2 col-start-1 row-start-2 lg:col-span-1 lg:col-start-2 lg:row-start-1 lg:mt-40">
      {result && (
        <motion.div
          className="flex min-h-[126px] flex-col items-center"
          initial={{ opacity: 0, scale: 0.1 }}
          animate={{
            opacity: 1,
            scale: [null, 1.2, 1.15],
            transition: { duration: 0.5, delay: 0, type: 'spring', stiffness: 250 },
          }}
        >
          <h2 className="text-center text-[56px] font-bold uppercase leading-[56px] tracking-[0.3px] lg:mx-3">
            {result === 'draw' ? result : `you ${result}`}
          </h2>
          <motion.button
            whileHover={{
              scale: [null, 1.2, 1.15],
              transition: { duration: 0.3, delay: 0, type: 'spring', stiffness: 250 },
            }}
            className="group mt-[22px] rounded-radii bg-white px-[60px] py-[10px] text-lg uppercase tracking-[1.4px]"
            onClick={onPlayAgain}
          >
            <span className="text-bg-gr group-hover:bg-rock-gr">play again</span>
          </motion.button>
        </motion.div>
      )}
    </div>
  );
};
