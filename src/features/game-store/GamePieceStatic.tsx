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
    <div className="aspect-square w-[calc(100%-1.35em)] rounded-[50%] bg-dark-trans-1" />
  );

  return (
    <div className="flex flex-col items-center gap-7 md:flex-col-reverse md:gap-16">
      <div
        className={`${piece} flex aspect-square w-32 items-center justify-center rounded-[50%] [container-type:inline-size] md:w-[91%]`}
      >
        {content}
      </div>
      <h3 className="uppercase tracking-[1.8px] md:text-2xl md:tracking-[2.5px]">{title}</h3>
    </div>
  );
};
