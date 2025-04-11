import React from 'react';
import { render } from '@testing-library/react-native';
import ResultScreen from '../result';
import { GameSettingsContext } from '@/context/GameSettingsContext';
import { GameMode, GameResult, DifficultyLevel } from '@/types/game';

describe('ResultScreen', () => {
  it('shows correct win message and emoji for multiplayer', () => {
    const mockContext = {
      difficulty: DifficultyLevel.Medium,
      mode: GameMode.Multi,
      playerX: 'Alice',
      playerO: 'Bob',
      userFirst: true,
      result: GameResult.Win,
      gridSize: 3,
      setUserFirst: jest.fn(),
      setDifficulty: jest.fn(),
      setMode: jest.fn(),
      setPlayerX: jest.fn(),
      setPlayerO: jest.fn(),
      setResult: jest.fn(),
      setGridSize: jest.fn(),
    };

    const { getByText } = render(
      <GameSettingsContext.Provider value={mockContext}>
        <ResultScreen />
      </GameSettingsContext.Provider>,
    );

    expect(getByText('🎉')).toBeTruthy();
    expect(getByText('Alice Wins!')).toBeTruthy();
  });
});
