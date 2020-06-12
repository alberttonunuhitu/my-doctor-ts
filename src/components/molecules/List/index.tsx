import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  IconNext,
  IconUser,
  IconLanguage,
  IconStarBlue,
  IconFile,
} from '../../../assets';
import {colors, fonts} from '../../../utilities';

interface ListComponentProps {
  avatar?: any | undefined;
  icon?: string | undefined;
  name: string;
  description: string;
  type?: string;
  onPress: () => void;
}

const ListComponent: React.FC<ListComponentProps> = ({
  avatar,
  icon = undefined,
  name,
  description,
  type,
  onPress,
}) => {
  const Icon = () => {
    switch (icon) {
      case 'user':
        return <IconUser />;
      case 'language':
        return <IconLanguage />;
      case 'rating':
        return <IconStarBlue />;
      case 'help':
        return <IconFile />;
      default:
        return <IconUser />;
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {icon ? <Icon /> : <Image source={avatar} style={styles.avatar} />}
      <View style={styles.content}>
        <Text style={styles.nameText}>{name}</Text>
        <Text style={styles.descriptionText}>{description}</Text>
      </View>
      {type === 'next' && <IconNext />}
    </TouchableOpacity>
  );
};

export default ListComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
    marginLeft: 16,
  },
  icon: {},
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
  },
  nameText: {
    fontFamily: fonts.primary.normal,
    fontSize: 16,
    color: colors.text.primary,
  },
  descriptionText: {
    fontFamily: fonts.primary[300],
    fontSize: 12,
    color: colors.text.secondary,
  },
});
