import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {colors, fonts} from '../../../utilities';

interface LinkComponentProps {
  label: string;
  size?: number;
  align?: any;
}

const LinkComponent: React.FC<LinkComponentProps> = ({
  label,
  size = 12,
  align = undefined,
}) => {
  return (
    <View>
      <Text style={[styles.text, {fontSize: size, textAlign: align}]}>
        {label}
      </Text>
    </View>
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
