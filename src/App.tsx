import { Container } from '@/components/Container';
import { Header } from '@/components/Header';
import { GameBoard } from '@/features/game-store/GameBoard';
import { Footer } from '@/components/Footer';

function App() {
  return (
    <Container>
      <Header />
      <GameBoard />
      <Footer />
    </Container>
  );
}

export default App;
