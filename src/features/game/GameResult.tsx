import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { useGameResult } from './useGameResult';
import { MGamePieceStatic } from './GamePieceStatic';
import { ResultPanel } from './ResultPanel';

export const GameResult = forwardRef<HTMLDivElement>((_, ref) => {
  const { playerChoice, computerChoice, result, handlePlayAgain } = useGameResult();

  return (
    <motion.div
      ref={ref}
      className="mt-[98px] grid w-full grid-cols-[repeat(2,156px)] justify-between gap-x-1 gap-y-[68px] lg:mt-[74px] lg:w-auto lg:grid-cols-[316px_1fr_316px] lg:gap-9"
    >
      <MGamePieceStatic
        layout
        drag
        dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
        dragElastic={0.4}
        piece={playerChoice}
        title="you picked"
        winner={result === 'win'}
      />
      <ResultPanel result={result} onPlayAgain={handlePlayAgain} />
      <MGamePieceStatic
        layout
        drag
        dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
        dragElastic={0.4}
        piece={computerChoice}
        title="The house picked"
        winner={result === 'lose'}
      />
    </motion.div>
  );
});

export const MGameResult = motion(GameResult);
