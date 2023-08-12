import type { FC } from 'react';
import { GamePiece } from './GamePiece';
import type { Complexity, IGamePiece } from '@/types';

interface GameChoiceProps {
  pieces: IGamePiece[];
  complexity: Complexity;
}

export const GameChoice: FC<GameChoiceProps> = ({ pieces, complexity }) => {
  const content = pieces.map((piece) => <GamePiece key={piece.type} {...piece} />);

  return (
    <div
      className="relative w-[205px] aspect-square mt-[150px] bg-no-repeat bg-center bg-contain"
      style={{ backgroundImage: `url('/assets/images/bg-${complexity}.svg')` }}
    >
      {content}
    </div>
  );
};
