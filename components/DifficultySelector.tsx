import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from './Button';
import { DifficultyLevel, type Difficulty } from '@/types/game';
import { COLORS } from '@/theme';

type Props = {
  selected: Difficulty | undefined;
  onSelect: (level: Difficulty) => void;
};

const difficulties: Difficulty[] = [
  DifficultyLevel.Easy,
  DifficultyLevel.Medium,
  DifficultyLevel.Hard,
];

export default function DifficultySelector({ selected, onSelect }: Props) {
  return (
    <View style={styles.row}>
      {difficulties.map((level) => (
        <View key={level} style={styles.difficultyWrapper}>
          <Button
            title={level.toUpperCase()}
            onPress={() => onSelect(level)}
            style={selected === level ? styles.selected : undefined}
          />
          {level === DifficultyLevel.Hard && (
            <View style={styles.unbeatableTag}>
              <Text style={styles.unbeatableText}>Unbeatable</Text>
            </View>
          )}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12,
  },
  difficultyWrapper: {
    alignItems: 'center',
    position: 'relative',
  },
  unbeatableTag: {
    backgroundColor: COLORS.danger,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    marginTop: 4,
  },
  unbeatableText: {
    color: COLORS.white,
    fontSize: 10,
    fontWeight: 'bold',
  },
  selected: {
    backgroundColor: COLORS.grey,
  },
});
