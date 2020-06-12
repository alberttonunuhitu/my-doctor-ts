import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {ButtomComponent} from '../../../components';
import {colors, fonts} from '../../../utilities';

interface InputChatComponentProps {
  isDisable: boolean;
  onPress: () => void;
}

const InputChatComponent: React.FC<InputChatComponentProps> = ({
  isDisable,
  onPress,
}) => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Tulis pesan untuk Nairobi" />
      <ButtomComponent
        type="send-chat"
        label="Send"
        isDisabled={isDisable}
        onPress={onPress}
      />
    </View>
  );
};

export default InputChatComponent;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    backgroundColor: colors.disabled,
    padding: 14,
    marginRight: 10,
    borderRadius: 10,
    fontFamily: fonts.primary.normal,
    fontSize: 14,
    maxHeight: 45,
  },
});
