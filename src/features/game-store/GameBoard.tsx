import { useGameBoard } from './useGameBoard';
import { GamePiece } from './GamePiece';

export const GameBoard = () => {
  const { pieces, complexity } = useGameBoard();

  const content = pieces.map((piece) => <GamePiece key={piece.type} {...piece} />);

  return (
    <main
      className="relative w-[205px] aspect-square mt-[150px] bg-no-repeat bg-center bg-contain"
      style={{ backgroundImage: `url('/assets/images/bg-${complexity}.svg')` }}
    >
      {content}
    </main>
  );
};
