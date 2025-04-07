import { View, StyleSheet } from 'react-native';
import GameCell from './GameCell';
import { Player } from '@/types/game';
import { COLORS } from '@/theme';

type GridBoardProps = {
  board: (Player | null)[];
  onCellPress: (index: number) => void;
  size: number;
};

export default function GridBoard({ board, onCellPress, size }: GridBoardProps) {
  const cellSize: `${number}%` = `${100 / size}%`;

  return (
    <View style={styles.grid}>
      {board.map((val, i) => (
        <GameCell key={i} value={val} onPress={() => onCellPress(i)} cellSize={cellSize} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    width: 320,
    height: 320,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: COLORS.greyLight,
    borderRadius: 12,
    overflow: 'hidden',
  },
});
