import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {ButtomComponent} from '../../../components';
import {colors, fonts} from '../../../utilities';

interface InputChatComponentProps {}

const InputChatComponent: React.FC<InputChatComponentProps> = ({}) => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Tulis pesan untuk Nairobi" />
      <ButtomComponent
        type="send-chat"
        label="Send"
        isDisabled={true}
        onPress={() => null}
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
