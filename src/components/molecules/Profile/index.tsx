import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {IconRemovePhoto, IconFemale, IconMale} from '../../../assets';
import {colors, fonts} from '../../../utilities';

interface ProfileComponentProps {
  avatar: any;
  name?: string | undefined;
  description?: string | undefined;
  isRemove?: boolean;
  icon?: string | undefined;
}

const ProfileComponent: React.FC<ProfileComponentProps> = ({
  avatar,
  name,
  description,
  isRemove = false,
  icon,
}) => {
  const Icon = () => {
    switch (icon) {
      case 'female':
        return <IconFemale />;
      case 'male':
        return <IconMale />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapperAvatar}>
        <Image source={avatar} style={styles.avatar} />
        {isRemove && (
          <View style={styles.wrapperIcon}>
            <IconRemovePhoto />
          </View>
        )}
        {icon && (
          <View style={styles.wrapperIcon}>
            <Icon />
          </View>
        )}
      </View>
      {name && (
        <View>
          <Text style={styles.textName}>{name}</Text>
          <Text style={styles.textProfession}>{description}</Text>
        </View>
      )}
    </View>
  );
};

export default ProfileComponent;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapperAvatar: {
    width: 130,
    height: 130,
    borderRadius: 130 / 2,
    borderWidth: 1,
    borderColor: colors.border,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
  },
  wrapperIcon: {
    position: 'absolute',
    width: 30,
    height: 30,
    right: 8,
    bottom: 8,
  },
  textName: {
    fontFamily: fonts.primary[600],
    fontSize: 20,
    color: colors.text.primary,
    marginTop: 16,
    textAlign: 'center',
  },
  textProfession: {
    fontFamily: fonts.primary.normal,
    fontSize: 16,
    color: colors.text.secondary,
    marginTop: 2,
    textAlign: 'center',
  },
});
