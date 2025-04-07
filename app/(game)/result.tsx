import { useLocalSearchParams, router } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';
import { useGameSettings } from '../../context/GameSettingsContext';
import Button from '../../components/Button';
import { GameResult } from '../../types/game';
import { COLORS, FONT_SIZES, SPACING } from '../../theme';

export default function ResultScreen() {
  const { result } = useLocalSearchParams<{ result: GameResult }>();
  const { mode, playerX, playerO } = useGameSettings();
  const isMultiplayer = mode === 'multi';

  const getEmoji = () => (result === 'win' ? '🎉' : result === 'lose' ? '😓' : '🤝');

  const getMessage = () => {
    if (result === 'tie') return 'It’s a Tie!';
    if (isMultiplayer) return result === 'win' ? `${playerX} Wins!` : `${playerO} Wins!`;
    return result === 'win' ? 'You Won!' : 'You Lost!';
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
