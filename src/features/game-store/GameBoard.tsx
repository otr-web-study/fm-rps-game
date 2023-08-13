import { useGameBoard } from './useGameBoard';
import { GameChoice } from './GameChoice';

export const GameBoard = () => {
  const { pieces, complexity, stage } = useGameBoard();

  return (
    <main>{stage === 'choice' && <GameChoice pieces={pieces} complexity={complexity} />}</main>
  );
};
