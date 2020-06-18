import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ILNullPhoto} from '../../assets';
import {
  HeaderComponent,
  ProfileComponent,
  ListComponent,
  SpaceComponent,
} from '../../components';
import {RootStackNavProps} from '../../routes/RootStackParamList';
import {colors, removeData} from '../../utilities';
import auth from '@react-native-firebase/auth';
import {useSelector, useDispatch} from 'react-redux';
import {RootState, setLoading, clearUser} from '../../store';

interface UserScreenProps {
  navigation: RootStackNavProps<'User'>;
}

const UserScreen: React.FC<UserScreenProps> = ({navigation}) => {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const signOut = () => {
    dispatch(setLoading(true));
    auth()
      .signOut()
      .then(() => {
        removeData('user').then(() => {
          dispatch(clearUser());
          dispatch(setLoading(false));
          navigation.replace('GettingStarted');
        });
      });
  };

  return (
    <View style={styles.screen}>
      <HeaderComponent title="Profile" onPress={() => navigation.goBack()} />
      <SpaceComponent height={10} />
      <ProfileComponent
        avatar={user.photo ? user.photo : ILNullPhoto}
        name={user.fullName}
        description={user.profession}
      />
      <SpaceComponent height={14} />
      <ListComponent
        type="next"
        icon="user"
        name="Edit Profile"
        description="Last updated yesterday"
        onPress={() => navigation.navigate('EditProfile')}
      />
      <ListComponent
        type="next"
        icon="language"
        name="Language"
        description="Available 12 languages"
        onPress={() => null}
      />
      <ListComponent
        type="next"
        icon="rating"
        name="Give Us Rate"
        description="On Google Play Store"
        onPress={() => null}
      />
      <ListComponent
        type="next"
        icon="help"
        name="Keluar"
        description="Read our guidelines"
        onPress={signOut}
      />
    </View>
  );
};

export default UserScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
