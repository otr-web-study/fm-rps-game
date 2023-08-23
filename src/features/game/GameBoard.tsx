import { AnimatePresence } from 'framer-motion';
import { MGameChoice } from './GameChoice';
import { MGameResult } from './GameResult';
import { useGame } from './useGame';

export const GameBoard = () => {
  const { pieces, complexity, stage, playerChoice, handleChoice } = useGame();

  return (
    <main className="flex min-h-[480px] w-full max-w-[345px] items-start justify-center lg:max-w-full">
      <AnimatePresence mode="wait">
        {stage === 'choice' && (
          <MGameChoice
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
            key="choice"
            pieces={pieces}
            complexity={complexity}
            playerChoice={playerChoice}
            handleChoice={handleChoice}
          />
        )}
        {stage === 'result' && (
          <MGameResult
            initial={{ x: '80vw' }}
            animate={{ x: 0 }}
            exit={{ x: '-80vw', transition: { type: 'tween' } }}
            key="result"
            transition={{ duration: 0.3, type: 'spring', stiffness: 200 }}
          />
        )}
      </AnimatePresence>
    </main>
  );
};
