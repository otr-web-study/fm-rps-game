export type GamePieceType = 'lizard' | 'paper' | 'rock' | 'scissors' | 'spock';
export type GamePiecePosition = [number, number];

export interface IGamePiece {
  type: GamePieceType;
  position: GamePiecePosition;
}
