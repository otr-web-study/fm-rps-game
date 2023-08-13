import type { FC } from 'react';
import { GamePiece } from './GamePiece';
import type { Complexity, GamePiece as GamePieceType } from '@/types';

interface GameChoiceProps {
  pieces: GamePieceType[];
  complexity: Complexity;
}

export const GameChoice: FC<GameChoiceProps> = ({ pieces, complexity }) => {
  const content = pieces.map((piece) => (
    <GamePiece key={piece} piece={piece} complexity={complexity} />
  ));

  return (
    <div
      className="relative w-[205px] aspect-square mt-[150px] bg-no-repeat bg-center bg-contain  md:w-[300px]"
      style={{ backgroundImage: `url('/assets/images/bg-${complexity}.svg')` }}
    >
      {content}
    </div>
  );
};
