import { renderHook } from '@testing-library/react-native';
import { useResultHaptics } from '../useResultHaptics';
import * as Haptics from 'expo-haptics';
import { GameResult } from '@/types/game';

jest.mock('expo-haptics');

describe('useResultHaptics', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('triggers success haptic for GameResult.Win', () => {
    renderHook(() => useResultHaptics(GameResult.Win));
    expect(Haptics.notificationAsync).toHaveBeenCalledWith(
      Haptics.NotificationFeedbackType.Success,
    );
  });

  it('triggers error haptic for GameResult.Lose', () => {
    renderHook(() => useResultHaptics(GameResult.Lose));
    expect(Haptics.notificationAsync).toHaveBeenCalledWith(Haptics.NotificationFeedbackType.Error);
  });

  it('triggers warning haptic for GameResult.Tie', () => {
    renderHook(() => useResultHaptics(GameResult.Tie));
    expect(Haptics.notificationAsync).toHaveBeenCalledWith(
      Haptics.NotificationFeedbackType.Warning,
    );
  });
});
