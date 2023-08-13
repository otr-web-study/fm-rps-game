import { FC } from 'react';
import { GamePiece as GamePieceType, Complexity } from '@/types';

interface GamePieceProps {
  piece: GamePieceType;
  complexity: Complexity;
}

export const GamePiece: FC<GamePieceProps> = ({ piece, complexity }) => {
  return (
    <div
      className={`${piece} ${complexity} absolute aspect-square flex justify-center items-center rounded-[50%]`}
    >
      <div
        className={`${complexity} w-full aspect-square bg-no-repeat bg-center rounded-[50%] bg-white`}
        style={{
          backgroundImage: `url('/assets/images/icon-${piece}.svg')`,
        }}
      />
    </div>
  );
};
