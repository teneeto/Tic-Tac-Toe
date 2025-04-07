import { render } from '@testing-library/react-native';
import TurnIndicator from '../TurnIndicator';

describe('TurnIndicator', () => {
  it('renders turn text', () => {
    const { getByText } = render(<TurnIndicator text="Turn: X" />);
    expect(getByText('Turn: X')).toBeTruthy();
  });
});
