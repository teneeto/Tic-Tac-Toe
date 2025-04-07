import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from './Button';

type Props = {
  onSelect: (userFirst: boolean) => void;
};

export default function FirstPlayerSelector({ onSelect }: Props) {
  return (
    <View>
      <Text style={styles.subtext}>Who should play first?</Text>
      <View style={styles.row}>
        <Button title="You" onPress={() => onSelect(true)} />
        <Button title="Computer" onPress={() => onSelect(false)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  subtext: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12,
  },
});
