import { FC } from 'react';
import { GamePiece as GamePieceType } from '@/types';

interface GamePieceProps {
  piece: GamePieceType;
}

export const GamePiece: FC<GamePieceProps> = ({ piece }) => {
  return (
    <div className="w-full aspect-square flex justify-center items-center rounded-[50%] py-[1.35em] px-[1.35em] text-[8.5cqw]">
      <div
        className="w-full aspect-square bg-no-repeat bg-[50%,50%] bg-center rounded-[50%] bg-white shadow-sh-inner"
        style={{
          backgroundImage: `url('/assets/images/icon-${piece}.svg')`,
        }}
      />
    </div>
  );
};
