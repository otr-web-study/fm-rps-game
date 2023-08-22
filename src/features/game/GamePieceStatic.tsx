import { motion, AnimatePresence } from 'framer-motion';
import { type FC } from 'react';
import { GamePiece as GamePieceType } from '@/types';
import { GamePiece } from './GamePiece';

interface GamePieceStaticProps {
  piece: GamePieceType | null;
  title: string;
  winner: boolean;
}

const waitVariants = {
  jump: {
    y: [0, -40],
    x: 0,
    transition: {
      y: {
        yoyo: Infinity,
        duration: 0.25,
        ease: 'easeOut',
      },
    },
  },
};

export const GamePieceStatic: FC<GamePieceStaticProps> = ({ piece, title, winner }) => {
  const content = piece ? (
    <GamePiece piece={piece} />
  ) : (
    <AnimatePresence>
      <motion.div
        variants={waitVariants}
        animate="jump"
        className="aspect-square w-[calc(100%-1.35em)] rounded-[50%] bg-dark-trans-1"
      />
    </AnimatePresence>
  );

  const winnerClassName = winner ? 'before:scale-[2.6]' : '';
  const pieceClassName = piece
    ? 'before:absolute before:bg-winner-gr before:left-0 before:top-0 before:-z-10 before:aspect-square before:w-full before:rounded-[50%] before:transition-transform before:duration-500 before:content-[""]'
    : '';

  return (
    <div className="flex flex-col items-center gap-7 [container-type:inline-size] lg:flex-col-reverse lg:gap-16">
      <div
        className={`${piece} relative flex aspect-square w-32 items-center justify-center rounded-[50%] [container-type:inline-size] lg:w-[91%] ${pieceClassName} ${winnerClassName}`}
      >
        {content}
      </div>
      <h3 className="uppercase tracking-[1.8px] lg:text-2xl lg:tracking-[2.5px]">{title}</h3>
    </div>
  );
};
