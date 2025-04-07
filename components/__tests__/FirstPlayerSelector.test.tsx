import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import FirstPlayerSelector from '../FirstPlayerSelector';

describe('FirstPlayerSelector', () => {
  it('renders both options', () => {
    const { getByText } = render(<FirstPlayerSelector onSelect={jest.fn()} />);

    expect(getByText('You')).toBeTruthy();
    expect(getByText('Computer')).toBeTruthy();
  });

  it('calls onSelect with true when "You" is pressed', () => {
    const mockSelect = jest.fn();
    const { getByText } = render(<FirstPlayerSelector onSelect={mockSelect} />);

    fireEvent.press(getByText('You'));
    expect(mockSelect).toHaveBeenCalledWith(true);
  });

  it('calls onSelect with false when "Computer" is pressed', () => {
    const mockSelect = jest.fn();
    const { getByText } = render(<FirstPlayerSelector onSelect={mockSelect} />);

    fireEvent.press(getByText('Computer'));
    expect(mockSelect).toHaveBeenCalledWith(false);
  });
});
