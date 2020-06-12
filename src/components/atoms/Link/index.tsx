import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {colors, fonts} from '../../../utilities';

interface LinkComponentProps {
  label: string;
  size?: number;
  align?: any;
  onPress: () => void;
}

const LinkComponent: React.FC<LinkComponentProps> = ({
  label,
  size = 12,
  align = undefined,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={[styles.text, {fontSize: size, textAlign: align}]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default LinkComponent;

const styles = StyleSheet.create({
  text: {
    fontFamily: fonts.primary.normal,
    textDecorationLine: 'underline',
    color: colors.text.secondary,
  },
});
