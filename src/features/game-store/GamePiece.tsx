import { FC } from 'react';
import { GamePieceType, GamePiecePosition } from '@/types';

interface GamePieceProps {
  type: GamePieceType;
  position?: GamePiecePosition;
  interactive?: boolean;
}
export const GamePiece: FC<GamePieceProps> = ({ type, position }) => {
  const positionStyle = position
    ? {
        top: `${position[0]}%`,
        left: `${position[1]}%`,
      }
    : {};

  return (
    <div
      className="absolute w-24 aspect-square bg-no-repeat bg-center rounded-[50%] bg-white"
      style={{
        ...positionStyle,
        backgroundImage: `url('/assets/images/icon-${type}.svg')`,
      }}
    />
  );
};
