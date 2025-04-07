import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import DifficultySelector from '../DifficultySelector';
import { DifficultyLevel } from '@/types/game';

describe('DifficultySelector', () => {
  it('renders all difficulty levels', () => {
    const { getByText } = render(<DifficultySelector selected={undefined} onSelect={jest.fn()} />);

    expect(getByText('EASY')).toBeTruthy();
    expect(getByText('MEDIUM')).toBeTruthy();
    expect(getByText('HARD')).toBeTruthy();
  });

  it('calls onSelect with correct difficulty', () => {
    const mockSelect = jest.fn();
    const { getByText } = render(<DifficultySelector selected={undefined} onSelect={mockSelect} />);

    fireEvent.press(getByText('HARD'));
    expect(mockSelect).toHaveBeenCalledWith(DifficultyLevel.Hard);
  });

  it('shows the "Unbeatable" tag under HARD', () => {
    const { getByText } = render(<DifficultySelector selected={undefined} onSelect={jest.fn()} />);

    expect(getByText('Unbeatable')).toBeTruthy();
  });
});
