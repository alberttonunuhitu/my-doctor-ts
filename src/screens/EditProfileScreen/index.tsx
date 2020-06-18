import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {ILNullPhoto} from '../../assets';
import {
  HeaderComponent,
  ProfileComponent,
  InputComponent,
  ButtomComponent,
  SpaceComponent,
} from '../../components';
import {colors, showError} from '../../utilities';
import {RootStackNavProps} from '../../routes/RootStackParamList';
import database from '@react-native-firebase/database';
import {useDispatch, useSelector} from 'react-redux';
import {RootState, setLoading, setUser} from '../../store';

interface EditProfileScreenProps {
  navigation: RootStackNavProps<'EditProfile'>;
}

const EditProfileScreen: React.FC<EditProfileScreenProps> = ({navigation}) => {
  const user = useSelector((state: RootState) => state.user);
  const [password, setPassword] = React.useState('');
  const dispatch = useDispatch();

  const onUpdate = () => {
    dispatch(setLoading(true));

    const data = {
      fullName: user.fullName,
      profession: user.profession,
    };

    database()
      .ref(`users/${user.uid}`)
      .update(data)
      .then(() => {
        dispatch(setLoading(false));
        navigation.navigate('User');
      })
      .catch((error) => {
        dispatch(setLoading(false));
        showError(error.message);
      });
  };

  return (
    <View style={styles.screen}>
      <HeaderComponent
        title="Edit Profile"
        onPress={() => navigation.goBack()}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <ProfileComponent
            avatar={user.photo ? {uri: user.photo} : ILNullPhoto}
            isRemove
          />
          <SpaceComponent height={26} />
          <InputComponent
            label="Full Name"
            value={user.fullName}
            onChangeText={(value) =>
              dispatch(setUser({...user, fullName: value}))
            }
          />
          <SpaceComponent height={24} />
          <InputComponent
            label="Pekerjaan"
            value={user.profession}
            onChangeText={(value) =>
              dispatch(setUser({...user, profession: value}))
            }
          />
          <SpaceComponent height={24} />
          <InputComponent label="Email" value={user.email} disabled />
          <SpaceComponent height={24} />
          <InputComponent
            label="Password"
            value={password}
            onChangeText={(value) => setPassword(value)}
          />
          <SpaceComponent height={40} />
          <ButtomComponent label="Save Profile" onPress={onUpdate} />
        </View>
      </ScrollView>
    </View>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    padding: 40,
    paddingTop: 0,
  },
});
