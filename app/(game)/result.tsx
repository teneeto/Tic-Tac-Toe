import Button from '@/components/Button';
import { useGameSettings } from '@/context/GameSettingsContext';
import { FONT_SIZES, SPACING } from '@/theme';
import { GameMode, GameResult } from '@/types/game';
import { router } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

export default function ResultScreen() {
  const { result, mode, playerX, playerO } = useGameSettings();
  const isMultiplayer = mode === GameMode.Multi;

  const getEmoji = () =>
    result === GameResult.Win ? '🎉' : result === GameResult.Lose ? '😓' : '🤝';

  const getMessage = () => {
    if (result === GameResult.Tie) return 'It’s a Tie!';
    if (isMultiplayer) return result === GameResult.Win ? `${playerX} Wins!` : `${playerO} Wins!`;
    return result === GameResult.Win ? 'You Won!' : 'You Lost!';
  };

  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>{getEmoji()}</Text>
      <Text style={styles.resultText}>{getMessage()}</Text>
      <Button title="Play Again" onPress={() => router.replace('/')} variant="primary" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: SPACING.large },
  emoji: { fontSize: 64, marginBottom: 20 },
  resultText: {
    fontSize: FONT_SIZES.large,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: SPACING.medium,
  },
});
