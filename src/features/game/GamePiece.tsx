import { type FC, forwardRef } from 'react';
import { motion } from 'framer-motion';
import { GamePiece as GamePieceType } from '@/types';

interface GamePieceProps {
  piece: GamePieceType;
}

export const GamePiece: FC<GamePieceProps> = forwardRef<HTMLDivElement, GamePieceProps>(
  ({ piece }, ref) => {
    return (
      <motion.div
        ref={ref}
        className="flex aspect-square w-full items-center justify-center rounded-[50%] px-[1.35em] py-[1.35em] text-[8.5cqw]"
      >
        <div
          className="aspect-square w-full rounded-[50%] bg-white bg-[50%,50%] bg-center bg-no-repeat shadow-sh-inner"
          style={{
            backgroundImage: `url('/assets/images/icon-${piece}.svg')`,
          }}
        />
      </motion.div>
    );
  },
);

export const MGamePiece = motion(GamePiece);
