import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {ButtomComponent, SpaceComponent} from '../../atoms';
import DarkProfileComponent from './DarkProfile';
import {colors, fonts} from '../../../utilities';

interface HeaderComponentProps {
  type?: string;
  title: string;
  category?: string;
  avatar?: string;
  onPress: () => void;
}

const HeaderComponent: React.FC<HeaderComponentProps> = ({
  type,
  title,
  category,
  avatar,
  onPress,
}) => {
  if (type === 'dark-profile') {
    return (
      <DarkProfileComponent
        title={title}
        category={category}
        avatar={avatar}
        onPress={onPress}
      />
    );
  }

  let icon = 'back-dark';
  let containerColor = colors.white;
  let borderBottomLeftRadius = 0;
  let borderBottomRightRadius = 0;
  let fontColor = colors.text.primary;

  if (type === 'dark') {
    icon = 'back-light';
    containerColor = colors.secondary;
    borderBottomLeftRadius = 20;
    borderBottomRightRadius = 20;
    fontColor = colors.white;
  }

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: containerColor,
          borderBottomLeftRadius: borderBottomLeftRadius,
          borderBottomRightRadius: borderBottomRightRadius,
        },
      ]}>
      <ButtomComponent type="icon-only" icon={icon} onPress={onPress} />
      <Text
        style={[
          styles.text,
          {
            color: fontColor,
          },
        ]}>
        {title}
      </Text>
      <SpaceComponent width={24} />
    </View>
  );
};

export default HeaderComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 30,
    alignItems: 'center',
  },
  text: {
    flex: 1,
    fontFamily: fonts.primary[600],
    fontSize: 20,
    textAlign: 'center',
  },
});
