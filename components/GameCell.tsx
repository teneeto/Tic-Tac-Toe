import { TouchableOpacity, Text, StyleSheet, DimensionValue } from 'react-native';
import { COLORS, FONT_SIZES } from '../theme';
import { PlayerSymbol, type Player } from '@/types/game';
import { memo } from 'react';

type GameCellProps = {
  value: Player | null;
  onPress: () => void;
  cellSize: DimensionValue;
};

function GameCell({ value, onPress, cellSize }: GameCellProps) {
  return (
    <TouchableOpacity
      accessibilityRole="button"
      style={[styles.cell, { width: cellSize, height: cellSize }]}
      onPress={onPress}
    >
      <Text
        style={[
          styles.text,
          value === PlayerSymbol.X && styles.xText,
          value === PlayerSymbol.O && styles.oText,
        ]}
      >
        {value}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cell: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: COLORS.grey,
    borderWidth: 0.5,
    backgroundColor: COLORS.white,
  },
  text: {
    fontSize: FONT_SIZES.xlarge,
    fontWeight: 'bold',
  },
  xText: {
    color: COLORS.primary,
  },
  oText: {
    color: COLORS.danger,
  },
});

export default memo(GameCell);
