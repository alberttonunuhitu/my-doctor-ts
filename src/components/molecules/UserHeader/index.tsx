import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ILNullPhoto} from '../../../assets';
import {colors, fonts} from '../../../utilities';
import {useSelector} from 'react-redux';
import {RootState} from '../../../store';

interface UserHeaderComponentProps {
  onPress: () => void;
}

const UserHeaderComponent: React.FC<UserHeaderComponentProps> = ({onPress}) => {
  const user = useSelector((state: RootState) => state.user);

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image
        source={user.photo ? {uri: user.photo} : ILNullPhoto}
        style={styles.avatar}
      />
      <View>
        <Text style={styles.nameText}>{user.fullName}</Text>
        <Text style={styles.professionText}>{user.profession}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default UserHeaderComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
    marginRight: 12,
  },
  nameText: {
    fontFamily: fonts.primary[600],
    fontSize: 16,
    color: colors.text.primary,
    textTransform: 'capitalize',
  },
  professionText: {
    fontFamily: fonts.primary.normal,
    fontSize: 12,
    color: colors.text.secondary,
    textTransform: 'capitalize',
  },
});
