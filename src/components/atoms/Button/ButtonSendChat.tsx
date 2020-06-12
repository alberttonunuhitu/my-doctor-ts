import React from 'react';
import {StyleSheet, View} from 'react-native';
import {IconSend, IconSendActive} from '../../../assets';
import {colors} from '../../../utilities';

interface ButtonSendChatComponentProps {
  isDisabled: boolean | undefined;
  onPress: () => void;
}

const ButtonSendChatComponent: React.FC<ButtonSendChatComponentProps> = ({
  isDisabled = true,
}) => {
  const icon = isDisabled ? <IconSend /> : <IconSendActive />;
  const backgroundColor = isDisabled ? colors.disabled : colors.tertiary;

  return (
    <View style={[styles.container, {backgroundColor: backgroundColor}]}>
      {icon}
    </View>
  );
};

export default ButtonSendChatComponent;

const styles = StyleSheet.create({
  container: {
    width: 45,
    height: 45,
    borderRadius: 10,
    paddingTop: 3,
    paddingRight: 3,
    paddingLeft: 8,
    paddingBottom: 8,
  },
});
