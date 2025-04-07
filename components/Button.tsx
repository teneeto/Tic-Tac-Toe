import { Pressable, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { COLORS, SPACING, FONT_SIZES } from '../theme';

type ButtonProps = {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary';
  style?: ViewStyle;
  textStyle?: TextStyle;
};

export default function Button({
  title,
  onPress,
  variant = 'secondary',
  style,
  textStyle,
}: ButtonProps) {
  return (
    <Pressable onPress={onPress} style={[styles.base, styles[variant], style]}>
      <Text style={[styles.text, variant === 'primary' && styles.primaryText, textStyle]}>
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    padding: SPACING.medium,
    borderRadius: 6,
    alignItems: 'center',
    marginVertical: SPACING.small,
  },
  primary: {
    backgroundColor: COLORS.primary,
  },
  secondary: {
    backgroundColor: COLORS.greyLight,
  },
  text: {
    fontSize: FONT_SIZES.medium,
    fontWeight: '600',
    color: COLORS.textDark,
  },
  primaryText: {
    color: COLORS.white,
  },
});
