import React from 'react';
import { View, StyleSheet } from 'react-native';
import Animated, { FadeIn, BounceIn } from 'react-native-reanimated';

import Button from '@/components/Button';
import { useGameSettings } from '@/context/GameSettingsContext';
import { FONT_SIZES, SPACING } from '@/theme';
import { GameResult } from '@/types/game';
import { router } from 'expo-router';
import { getResultMessage } from '@/utils/getResultMessage';
import { useResultHaptics } from '@/hooks/useResultHaptics';

export default function ResultScreen() {
  const { result, mode, playerX, playerO } = useGameSettings();

  const emoji = result === GameResult.Win ? '🎉' : result === GameResult.Lose ? '😓' : '🤝';

  const message = getResultMessage(result, mode, playerX, playerO);

  useResultHaptics(result);

  return (
    <View style={styles.container}>
      <Animated.Text entering={BounceIn.duration(600)} style={styles.emoji}>
        {emoji}
      </Animated.Text>

      <Animated.Text entering={FadeIn.duration(800)} style={styles.resultText}>
        {message}
      </Animated.Text>

      <Button title="Play Again" onPress={() => router.replace('/')} variant="primary" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: SPACING.large,
  },
  emoji: {
    fontSize: 64,
    marginBottom: 20,
  },
  resultText: {
    fontSize: FONT_SIZES.large,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: SPACING.medium,
  },
});
