import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Player } from '../types/game';
import { COLORS, FONT_SIZES } from '../theme';

type GameCellProps = {
  value: Player | null;
  onPress: () => void;
};

export default function GameCell({ value, onPress }: GameCellProps) {
  return (
    <TouchableOpacity accessibilityRole="button" style={styles.cell} onPress={onPress}>
      <Text style={[styles.text, value === 'X' && styles.xText, value === 'O' && styles.oText]}>
        {value}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cell: {
    width: '33.33%',
    height: '33.33%',
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
