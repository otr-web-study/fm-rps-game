import { GamePieceInteractive } from './GamePieceInteractive';
import { useGameChoice } from './useGameChoice';

export const GameChoice = () => {
  const { pieces, complexity, handleChoice } = useGameChoice();

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
