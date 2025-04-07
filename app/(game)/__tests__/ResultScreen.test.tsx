import { render } from '@testing-library/react-native';
import ResultScreen from '../result';

jest.mock('expo-router', () => ({
  useLocalSearchParams: () => ({ result: 'win' }),
  router: { replace: jest.fn() },
}));

jest.mock('../../../context/GameSettingsContext', () => {
  return {
    useGameSettings: () => ({
      mode: 'multi',
      playerX: 'Alice',
      playerO: 'Bob',
    }),
  };
});

describe('ResultScreen', () => {
  it('shows correct win message and emoji for multiplayer', () => {
    const { getByText } = render(<ResultScreen />);
    expect(getByText('🎉')).toBeTruthy();
    expect(getByText('Alice Wins!')).toBeTruthy();
  });
});
