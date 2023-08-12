export type GamePieceType = 'lizard' | 'paper' | 'rock' | 'scissors' | 'spock';
export type GamePiecePosition = [number, number];
export type GameStage = 'choice' | 'result';

export interface IGamePiece {
  type: GamePieceType;
  position: GamePiecePosition;
}
