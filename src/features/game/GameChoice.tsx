import { type FC, forwardRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Complexity, GamePiece } from '@/types';
import { MGamePieceInteracitve } from './GamePieceInteractive';

interface GameChoiceProps {
  pieces: GamePiece[];
  complexity: Complexity;
  playerChoice: GamePiece | null;
  handleChoice: (piece: GamePiece) => void;
}

const pieceAnimation = {
  hidden: { y: '-80vh' },
  visible: (custom: number) => ({
    y: 0,
    transition: { delay: 0.8 + custom * 0.3, type: 'spring', stiffness: 180, duration: 0.3 },
  }),
};

export const GameChoice: FC<GameChoiceProps> = forwardRef<HTMLDivElement, GameChoiceProps>(
  ({ pieces, complexity, playerChoice, handleChoice }, ref) => {
    const content = pieces
      .filter((p) => !playerChoice || playerChoice === p)
      .map((piece, idx) => (
        <MGamePieceInteracitve
          custom={idx}
          variants={pieceAnimation}
          initial="hidden"
          animate="visible"
          exit={{ y: '80vh', transition: { delay: 0, duration: 0.2 } }}
          whileHover={{
            scale: [null, 1.2, 1.15],
            transition: { duration: 0.3, delay: 0, type: 'spring', stiffness: 250 },
          }}
          transition={{
            type: 'spring',
            stiffness: 300,
          }}
          whileTap={{ y: '7%' }}
          key={piece}
          piece={piece}
          complexity={complexity}
          onClick={() => handleChoice(piece)}
        />
      ));

    return (
      <div
        ref={ref}
        className="relative mt-[150px] aspect-square w-[205px] bg-contain bg-center bg-no-repeat  lg:w-[300px]"
        style={{ backgroundImage: `url('/assets/images/bg-${complexity}.svg')` }}
      >
        <AnimatePresence>{content}</AnimatePresence>
      </div>
    );
  },
);

export const MGameChoice = motion(GameChoice);
