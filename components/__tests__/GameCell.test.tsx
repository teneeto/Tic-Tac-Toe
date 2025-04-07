import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import GameCell from '../GameCell';
import { PlayerSymbol } from '@/types/game';

describe('GameCell', () => {
  it('renders an empty cell', () => {
    const { getByRole } = render(<GameCell value={null} onPress={jest.fn()} cellSize={50} />);

    const cell = getByRole('button');
    expect(cell).toBeTruthy();
  });

  it('renders X symbol with primary color', () => {
    const { getByText } = render(
      <GameCell value={PlayerSymbol.X} onPress={jest.fn()} cellSize={50} />,
    );

    const symbol = getByText(PlayerSymbol.X);
    expect(symbol).toBeTruthy();
    expect(symbol.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ color: expect.stringMatching(/#/) }), // loose match
      ]),
    );
  });

  it('renders O symbol with danger color', () => {
    const { getByText } = render(
      <GameCell value={PlayerSymbol.O} onPress={jest.fn()} cellSize={50} />,
    );

    const symbol = getByText(PlayerSymbol.O);
    expect(symbol).toBeTruthy();
    expect(symbol.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ color: expect.stringMatching(/#/) }), // loose match
      ]),
    );
  });

  it('calls onPress when tapped', () => {
    const mockPress = jest.fn();
    const { getByRole } = render(<GameCell value={null} onPress={mockPress} cellSize={50} />);

    fireEvent.press(getByRole('button'));
    expect(mockPress).toHaveBeenCalled();
  });
});
