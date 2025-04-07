import { render, fireEvent } from '@testing-library/react-native';
import Button from '../Button';

describe('Button', () => {
  it('renders title and responds to press', () => {
    const mockFn = jest.fn();
    const { getByText } = render(<Button title="Click me" onPress={mockFn} />);
    fireEvent.press(getByText('Click me'));
    expect(mockFn).toHaveBeenCalled();
  });
});
