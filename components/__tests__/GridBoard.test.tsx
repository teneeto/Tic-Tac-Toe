import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import GridBoard from '../GridBoard';
import { PlayerSymbol } from '@/types/game';

describe('GridBoard', () => {
  const mockPress = jest.fn();
  const size = 3;
  const board = [
    PlayerSymbol.X,
    null,
    PlayerSymbol.O,
    null,
    PlayerSymbol.X,
    null,
    PlayerSymbol.O,
    null,
    null,
  ];

  beforeEach(() => {
    mockPress.mockClear();
  });

  it('renders correct number of GameCells', () => {
    const { getAllByRole } = render(
      <GridBoard board={board} onCellPress={mockPress} size={size} />,
    );

    const cells = getAllByRole('button');
    expect(cells).toHaveLength(board.length);
  });

  it('renders correct symbols in correct positions', () => {
    const { getAllByText } = render(
      <GridBoard board={board} onCellPress={mockPress} size={size} />,
    );

    expect(getAllByText(PlayerSymbol.X).length).toBeGreaterThan(0);
    expect(getAllByText(PlayerSymbol.O).length).toBeGreaterThan(0);
  });

  it('calls onCellPress with correct index when a cell is tapped', () => {
    const { getAllByRole } = render(
      <GridBoard board={board} onCellPress={mockPress} size={size} />,
    );

    const cells = getAllByRole('button');
    fireEvent.press(cells[1]); // Pressing the second cell (index 1)
    expect(mockPress).toHaveBeenCalledWith(1);

    fireEvent.press(cells[4]); // Pressing the fifth cell (index 4)
    expect(mockPress).toHaveBeenCalledWith(4);
  });
});
