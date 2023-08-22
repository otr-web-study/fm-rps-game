import { type FC, forwardRef } from 'react';
import { motion } from 'framer-motion';
import { GamePiece as GamePieceType, Complexity } from '@/types';
import { GamePiece } from './GamePiece';

interface GamePieceInteractiveProps {
  piece: GamePieceType;
  complexity: Complexity;
  onClick: () => void;
}

export const GamePieceInteractive: FC<GamePieceInteractiveProps> = forwardRef<
  HTMLButtonElement,
  GamePieceInteractiveProps
>(({ piece, complexity, onClick }, ref) => {
  return (
    <button
      ref={ref}
      className={`${piece} ${complexity} absolute aspect-square rounded-[50%] [container-type:inline-size]`}
      onClick={onClick}
    >
      <GamePiece piece={piece} />
      <span className="sr-only">{piece}</span>
    </button>
  );
});

export const MGamePieceInteracitve = motion(GamePieceInteractive);
