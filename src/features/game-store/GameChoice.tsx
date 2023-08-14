import type { FC } from 'react';
import { GamePieceInteractive } from './GamePieceInteractive';
import type { Complexity, GamePiece as GamePieceType } from '@/types';

interface GameChoiceProps {
  pieces: GamePieceType[];
  complexity: Complexity;
  onChoice: (piece: GamePieceType) => void;
}

export const GameChoice: FC<GameChoiceProps> = ({ pieces, complexity, onChoice }) => {
  const content = pieces.map((piece) => (
    <GamePieceInteractive
      key={piece}
      piece={piece}
      complexity={complexity}
      onClick={() => onChoice(piece)}
    />
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
