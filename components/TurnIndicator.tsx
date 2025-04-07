import { Text, StyleSheet } from 'react-native';
import { COLORS, FONT_SIZES } from '../theme';

type Props = {
  text: string;
};

export default function TurnIndicator({ text }: Props) {
  return <Text style={styles.turnText}>{text}</Text>;
}

const styles = StyleSheet.create({
  turnText: {
    fontSize: FONT_SIZES.large,
    fontWeight: '600',
    marginBottom: 16,
    color: COLORS.textDark,
  },
});
