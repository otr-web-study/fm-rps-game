import { useGameBoard } from './useGameBoard';
import { GameChoice } from './GameChoice';
import { GamePiece } from './GamePiece';

export const GameBoard = () => {
  const { pieces, complexity, stage } = useGameBoard();

  return (
    <main>{stage === 'choice' && <GameChoice pieces={pieces} complexity={complexity} />}</main>
  );
};
