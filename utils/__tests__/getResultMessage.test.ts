import { getResultMessage } from '../getResultMessage';
import { GameMode, GameResult } from '@/types/game';

describe('getResultMessage', () => {
  const playerX = 'Alice';
  const playerO = 'Bob';

  it('returns correct tie message', () => {
    expect(getResultMessage(GameResult.Tie, GameMode.Single, playerX, playerO)).toBe('It’s a Tie!');
  });

  it('returns correct single-player win/lose messages', () => {
    expect(getResultMessage(GameResult.Win, GameMode.Single, playerX, playerO)).toBe('You Won!');
    expect(getResultMessage(GameResult.Lose, GameMode.Single, playerX, playerO)).toBe('You Lost!');
  });

  it('returns correct multiplayer win/lose messages', () => {
    expect(getResultMessage(GameResult.Win, GameMode.Multi, playerX, playerO)).toBe('Alice Wins!');
    expect(getResultMessage(GameResult.Lose, GameMode.Multi, playerX, playerO)).toBe('Bob Wins!');
  });
});
