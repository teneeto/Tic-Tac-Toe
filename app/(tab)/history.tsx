import React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import { SPACING } from '@/theme';
import { useGameSettings } from '@/context/GameSettingsContext';

export default function History() {
  const { gameHistory } = useGameSettings();

  return (
    <View style={styles.container}>
      <FlatList
        data={gameHistory}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{`${item.date.slice(0, 10)} - ${item.mode.toUpperCase()} - ${item.result.toUpperCase()}`}</Text>
            <Text>{`${item.playerX} vs ${item.playerO}`}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SPACING.medium,
  },
  item: { padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' },
});
