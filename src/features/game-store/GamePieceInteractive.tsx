import { FC } from 'react';
import { GamePiece as GamePieceType, Complexity } from '@/types';
import { GamePiece } from './GamePiece';

interface GamePieceInteractiveProps {
  piece: GamePieceType;
  complexity: Complexity;
  onClick: () => void;
}

export const GamePieceInteractive: FC<GamePieceInteractiveProps> = ({
  piece,
  complexity,
  onClick,
}) => {
  return (
    <button
      className={`${piece} ${complexity} absolute aspect-square rounded-[50%] [container-type:inline-size] transition-transform duration-300 hover:-translate-y-1`}
      onClick={onClick}
    >
      <GamePiece piece={piece} />
      <span className="sr-only">{piece}</span>
    </button>
  );
};
