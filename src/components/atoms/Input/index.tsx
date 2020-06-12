import React from 'react';
import {Text, View, TextInput, StyleSheet} from 'react-native';
import {colors, fonts} from '../../../utilities';

interface InputComponentProps {
  label: string;
}

const InputComponent: React.FC<InputComponentProps> = ({label}) => {
  return (
    <View>
      <Text style={styles.text}>{label}</Text>
      <TextInput style={styles.input} />
    </View>
  );
};

export default InputComponent;

const styles = StyleSheet.create({
  text: {
    fontFamily: fonts.primary.normal,
    fontSize: 16,
    color: colors.text.secondary,
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    padding: 12,
  },
});
