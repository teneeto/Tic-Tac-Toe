import { checkWinner } from '../../minmax';
import { PlayerSymbol, GameResult } from '@/types/game';

describe('checkWinner', () => {
  it('detects horizontal win for 3x3', () => {
    const board = [
      PlayerSymbol.X,
      PlayerSymbol.X,
      PlayerSymbol.X,
      null,
      PlayerSymbol.O,
      null,
      null,
      null,
      PlayerSymbol.O,
    ];
    expect(checkWinner(board, 3)).toBe(PlayerSymbol.X);
  });

  it('detects vertical win for 3x3', () => {
    const board = [
      PlayerSymbol.O,
      PlayerSymbol.X,
      null,
      PlayerSymbol.O,
      PlayerSymbol.X,
      null,
      PlayerSymbol.O,
      null,
      PlayerSymbol.X,
    ];
    expect(checkWinner(board, 3)).toBe(PlayerSymbol.O);
  });

  it('detects diagonal ↘ win for 3x3', () => {
    const board = [
      PlayerSymbol.X,
      null,
      null,
      PlayerSymbol.O,
      PlayerSymbol.X,
      null,
      PlayerSymbol.O,
      null,
      PlayerSymbol.X,
    ];
    expect(checkWinner(board, 3)).toBe(PlayerSymbol.X);
  });

  it('detects diagonal ↙ win for 3x3', () => {
    const board = [
      null,
      null,
      PlayerSymbol.O,
      null,
      PlayerSymbol.O,
      null,
      PlayerSymbol.O,
      PlayerSymbol.X,
      PlayerSymbol.X,
    ];
    expect(checkWinner(board, 3)).toBe(PlayerSymbol.O);
  });

  it('detects tie for 3x3', () => {
    const board = [
      PlayerSymbol.X,
      PlayerSymbol.O,
      PlayerSymbol.X,
      PlayerSymbol.X,
      PlayerSymbol.O,
      PlayerSymbol.O,
      PlayerSymbol.O,
      PlayerSymbol.X,
      PlayerSymbol.X,
    ];
    expect(checkWinner(board, 3)).toBe(GameResult.Tie);
  });

  it('detects win on 4x4 board', () => {
    const board = [
      PlayerSymbol.O,
      PlayerSymbol.O,
      PlayerSymbol.O,
      PlayerSymbol.O,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
    ];
    expect(checkWinner(board, 4)).toBe(PlayerSymbol.O);
  });

  it('returns null if no winner yet', () => {
    const board = [
      PlayerSymbol.X,
      PlayerSymbol.O,
      PlayerSymbol.X,
      PlayerSymbol.O,
      null,
      null,
      null,
      null,
      null,
    ];
    expect(checkWinner(board, 3)).toBeNull();
  });
});
