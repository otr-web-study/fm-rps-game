import { FC } from 'react';
import { GamePiece as GamePieceType } from '@/types';
import { GamePiece } from './GamePiece';

interface GamePieceStaticProps {
  piece: GamePieceType | null;
  title: string;
}

export const GamePieceStatic: FC<GamePieceStaticProps> = ({ piece, title }) => {
  const content = piece ? (
    <GamePiece piece={piece} />
  ) : (
    <div className="bg-dark-trans-1 w-[calc(100%-1.35em)] aspect-square rounded-[50%]" />
  );

  return (
    <div className="flex flex-col md:flex-col-reverse items-center gap-7">
      <div
        className={`${piece} w-32 aspect-square rounded-[50%] [container-type:inline-size] flex justify-center items-center`}
      >
        {content}
      </div>
      <h3 className="uppercase tracking-[1.8px]">{title}</h3>
    </div>
  );
};
