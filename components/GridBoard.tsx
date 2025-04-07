import { View, StyleSheet } from 'react-native';
import GameCell from './GameCell';
import { Player } from '@/types/game';
import { COLORS } from '@/theme';

type GridBoardProps = {
  board: (Player | null)[];
  onCellPress: (index: number) => void;
};

export default function GridBoard({ board, onCellPress }: GridBoardProps) {
  return (
    <View style={styles.grid}>
      {board.map((val, i) => (
        <GameCell key={i} value={val} onPress={() => onCellPress(i)} />
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
