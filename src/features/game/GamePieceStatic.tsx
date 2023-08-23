import { type FC, forwardRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GamePiece as GamePieceType } from '@/types';
import { MGamePiece } from './GamePiece';

interface GamePieceStaticProps {
  piece: GamePieceType | null;
  title: string;
  winner: boolean;
}

export const GamePieceStatic: FC<GamePieceStaticProps> = forwardRef<
  HTMLDivElement,
  GamePieceStaticProps
>(({ piece, title, winner }, ref) => {
  const content = piece ? (
    <MGamePiece
      key="full"
      initial={{ scale: 0.3, opacity: 0 }}
      animate={{
        scale: [null, 1.1, 1],
        opacity: 1,
        transition: { type: 'spring', stiffness: 250 },
      }}
      piece={piece}
    />
  ) : (
    <motion.div
      key="emty"
      animate="visible"
      exit={{ opacity: 0 }}
      className="aspect-square w-[calc(100%-1.35em)] rounded-[50%] bg-dark-trans-1"
    />
  );

  const winnerClassName = winner ? 'before:scale-[2.6]' : '';
  const pieceClassName = piece
    ? 'before:absolute before:bg-winner-gr before:left-0 before:top-0 before:-z-10 before:aspect-square before:w-full before:rounded-[50%] before:transition-transform before:duration-500 before:content-[""]'
    : '';

  return (
    <div
      ref={ref}
      className="flex flex-col items-center gap-7 [container-type:inline-size] lg:flex-col-reverse lg:gap-16"
    >
      <motion.div
        className={`${piece} relative flex aspect-square w-32 items-center justify-center rounded-[50%] [container-type:inline-size] lg:w-[91%] ${pieceClassName} ${winnerClassName}`}
      >
        <AnimatePresence mode="wait">{content}</AnimatePresence>
      </motion.div>
      <h3 className="uppercase tracking-[1.8px] lg:text-2xl lg:tracking-[2.5px]">{title}</h3>
    </div>
  );
});

export const MGamePieceStatic = motion(GamePieceStatic);
