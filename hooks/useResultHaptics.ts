import { useEffect } from 'react';
import * as Haptics from 'expo-haptics';
import { GameResult } from '@/types/game';

export function useResultHaptics(result: GameResult | null) {
  useEffect(() => {
    if (result === GameResult.Win)
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    else if (result === GameResult.Lose)
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
    else if (result === GameResult.Tie)
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
  }, [result]);
}
