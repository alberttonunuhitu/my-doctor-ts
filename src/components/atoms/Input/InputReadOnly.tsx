import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../utilities';

interface InputReadOnlyComponentProps {
  label: string;
  value: string;
}

const InputReadOnlyComponent: React.FC<InputReadOnlyComponentProps> = ({
  label,
  value,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

export default InputReadOnlyComponent;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderBottomWidth: 1,
    borderColor: colors.border,
  },
  label: {
    fontFamily: fonts.primary.normal,
    fontSize: 12,
    color: colors.text.secondary,
    marginBottom: 6,
  },
  value: {
    fontFamily: fonts.primary.normal,
    fontSize: 14,
    color: colors.text.primary,
  },
});
