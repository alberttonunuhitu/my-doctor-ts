import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import IconOnly from './IconOnly';
import ButtonSendChatComponent from './ButtonSendChat';
import {colors, fonts} from '../../../utilities';

interface ButtomComponentProps {
  type?: string;
  icon?: string;
  label?: string;
  isDisabled?: boolean;
  onPress: () => void;
}

const ButtomComponent: React.FC<ButtomComponentProps> = ({
  type,
  icon,
  label,
  isDisabled,
  onPress,
}) => {
  if (type === 'icon-only') {
    return <IconOnly icon={icon} onPress={onPress} />;
  } else if (type === 'send-chat') {
    return (
      <ButtonSendChatComponent onPress={onPress} isDisabled={isDisabled} />
    );
  }

  const containerColor =
    type === 'secondary'
      ? colors.button.secondary.background
      : colors.button.primary.background;

  const textColor =
    type === 'secondary'
      ? colors.button.secondary.text
      : colors.button.primary.text;

  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          backgroundColor: containerColor,
        },
      ]}
      onPress={onPress}>
      <Text
        style={[
          styles.text,
          {
            color: textColor,
          },
        ]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtomComponent;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    borderRadius: 10,
  },
  text: {
    fontFamily: fonts.primary[600],
    fontSize: 18,
    textAlign: 'center',
  },
});
