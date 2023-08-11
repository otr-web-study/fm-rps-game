import { FC } from 'react';
import { GamePieceType, GamePiecePosition } from '@/types';

interface GamePieceProps {
  type: GamePieceType;
  position: GamePiecePosition;
}
export const GamePiece: FC<GamePieceProps> = ({ type, position }) => {
  return (
    <div
      className="absolute w-12 aspect-square bg-no-repeat bg-center bg-contain rounded-[50%] bg-white"
      style={{ backgroundImage: `url('/assets/images/icon-${type}.svg')` }}
    />
  );
};
