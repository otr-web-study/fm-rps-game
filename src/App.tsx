import { Container } from '@/components/Container';
import { Header } from '@/components/Header';
import { GameBoard } from '@/features/game-store/GameBoard';

function App() {
  return (
    <Container>
      <Header />
      <GameBoard />
    </Container>
  );
}

export default App;
