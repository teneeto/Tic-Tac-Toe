import React from 'react';
import { TextInput, StyleSheet, TextInputProps } from 'react-native';
import { COLORS } from '@/theme';

type PlayerInputProps = TextInputProps & {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
};

export default function PlayerInput({
  placeholder,
  value,
  onChangeText,
  ...rest
}: PlayerInputProps) {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      returnKeyType="done"
      autoCapitalize="words"
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.grey,
    padding: 10,
    borderRadius: 6,
    marginVertical: 8,
  },
});
