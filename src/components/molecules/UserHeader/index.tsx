import React, {useState, useEffect} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ILNullPhoto} from '../../../assets';
import {colors, fonts, getFromLocalStorage} from '../../../utilities';

interface UserHeaderComponentProps {
  onPress: () => void;
}

const UserHeaderComponent: React.FC<UserHeaderComponentProps> = ({onPress}) => {
  interface UserEntity {
    uid: string;
    fullName: string;
    profession: string;
    email: string;
    photo: any;
  }

  const initialUser: UserEntity = {
    uid: 'UID',
    fullName: 'FULLNAME',
    profession: 'PROFESSION',
    email: 'EMAIL',
    photo: ILNullPhoto,
  };

  const [user, setUser] = useState<UserEntity>(initialUser);

  useEffect(() => {
    getFromLocalStorage('user').then((response) => {
      const data = response;
      data.photo = {uri: response.photo};
      setUser(data);
    });
  }, []);

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={user.photo} style={styles.avatar} />
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
