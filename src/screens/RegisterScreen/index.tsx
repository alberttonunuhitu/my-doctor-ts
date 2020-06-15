import React, {useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {
  ButtomComponent,
  HeaderComponent,
  InputComponent,
  SpaceComponent,
} from '../../components';
import {colors, storeInLocalStorage, showError} from '../../utilities';
import {RootStackNavProps} from '../../routes/RootStackParamList';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import {useDispatch} from 'react-redux';
import {setLoading} from '../../store';

interface RegisterScreenProps {
  navigation: RootStackNavProps<'Register'>;
}

const RegisterScreen: React.FC<RegisterScreenProps> = ({navigation}) => {
  interface UserInterface {
    fullName: string;
    profession: string;
    email: string;
    password: string;
  }

  const initialUser: UserInterface = {
    fullName: '',
    profession: '',
    email: '',
    password: '',
  };

  const [user, setUser] = useState<UserInterface>(initialUser);
  const dispatch = useDispatch();

  const onCountinue = () => {
    dispatch(setLoading(true));
    auth()
      .createUserWithEmailAndPassword(user.email, user.password)
      .then((response) => {
        const data = {
          fullName: user.fullName,
          profession: user.profession,
          email: user.email,
        };
        database().ref(`users/${response.user.uid}/`).set(data);
        storeInLocalStorage('user', {...data, uid: response.user.uid});
        dispatch(setLoading(false));
        setUser(initialUser);
        return navigation.navigate('UploadPhoto', {
          uid: response.user.uid,
          fullName: data.fullName,
          profession: data.profession,
          email: data.email,
        });
      })
      .catch((error) => {
        let errorMessage: string;

        switch (error.code) {
          case 'auth/email-already-in-use':
            errorMessage = 'Alamat email sudah digunakan.';
            break;
          case 'auth/invalid-email':
            errorMessage = 'Alamat email tidak valid.';
            break;
          case 'auth/weak-password':
            errorMessage = 'Maaf, password kurang dari 8 karakter.';
            break;
          default:
            errorMessage = error.message;
        }

        dispatch(setLoading(false));
        showError(errorMessage);
      });
  };

  return (
    <View style={styles.screen}>
      <HeaderComponent
        title="Daftar Akun"
        onPress={() => navigation.goBack()}
      />
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <InputComponent
            label="Full Name"
            value={user.fullName}
            onChangeText={(value) => setUser({...user, fullName: value})}
          />
          <SpaceComponent height={24} />
          <InputComponent
            label="Pekerjaan"
            value={user.profession}
            onChangeText={(value) => setUser({...user, profession: value})}
          />
          <SpaceComponent height={24} />
          <InputComponent
            label="Email"
            value={user.email}
            onChangeText={(value) => setUser({...user, email: value})}
          />
          <SpaceComponent height={24} />
          <InputComponent
            type="password"
            label="Password"
            value={user.password}
            onChangeText={(value) => setUser({...user, password: value})}
          />
          <SpaceComponent height={40} />
          <ButtomComponent label="Continue" onPress={onCountinue} />
        </ScrollView>
      </View>
    </View>
  );
};

export default RegisterScreen;

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
