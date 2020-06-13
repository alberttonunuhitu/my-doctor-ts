import React, {useState} from 'react';
import {Text, View, TextInput, StyleSheet} from 'react-native';
import {colors, fonts} from '../../../utilities';

interface InputComponentProps {
  type?: string;
  label: string;
  value?: any | undefined;
  onChangeText?: (text: string) => void;
}

const InputComponent: React.FC<InputComponentProps> = ({
  type = 'text',
  label,
  value,
  onChangeText,
}) => {
  const [borderColor, setBorderColor] = useState(colors.border);

  const onFocusForm = () => setBorderColor(colors.tertiary);
  const onBlurForm = () => setBorderColor(colors.border);

  const secureTextEntry = type === 'password' ? true : false;

  return (
    <View>
      <Text style={styles.text}>{label}</Text>
      <TextInput
        onFocus={onFocusForm}
        onBlur={onBlurForm}
        value={value}
        onChangeText={onChangeText}
        style={[styles.input, {borderColor: borderColor}]}
        secureTextEntry={secureTextEntry}
      />
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
    borderRadius: 10,
    padding: 12,
  },
});
