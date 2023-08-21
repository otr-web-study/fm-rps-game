import type { FC } from 'react';
import { Complexity, GamePiece } from '@/types';
import { GamePieceInteractive } from './GamePieceInteractive';

interface GameChoiceProps {
  pieces: GamePiece[];
  complexity: Complexity;
  handleChoice: (piece: GamePiece) => void;
}

export const GameChoice: FC<GameChoiceProps> = ({ pieces, complexity, handleChoice }) => {
  const content = pieces.map((piece) => (
    <GamePieceInteractive
      key={piece}
      piece={piece}
      complexity={complexity}
      onClick={() => handleChoice(piece)}
    />
  ));

  return (
    <div
      className="relative mt-[150px] aspect-square w-[205px] bg-contain bg-center bg-no-repeat  lg:w-[300px]"
      style={{ backgroundImage: `url('/assets/images/bg-${complexity}.svg')` }}
    >
      {content}
    </div>
  );
};
