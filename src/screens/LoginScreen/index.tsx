import React, {useState} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import {ILLogo} from '../../assets';
import {
  ButtomComponent,
  InputComponent,
  LinkComponent,
  SpaceComponent,
} from '../../components';
import {colors, fonts, showError, storeData} from '../../utilities';
import {RootStackNavProps} from '../../routes/RootStackParamList';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import {useDispatch} from 'react-redux';
import {setLoading, setUser} from '../../store';

interface LoginScreenProps {
  navigation: RootStackNavProps<'Login'>;
}

const LoginScreen: React.FC<LoginScreenProps> = ({navigation}) => {
  interface Credentials {
    email: string;
    password: string;
  }

  const intialCredentials: Credentials = {
    email: 'alberto.nunuhitu@gmail.com',
    password: '12345678',
  };

  const [credentials, setCredentials] = useState<Credentials>(
    intialCredentials,
  );
  const dispatch = useDispatch();

  const fetchUser = React.useCallback(
    async (uid: string) => {
      try {
        const snapshot = await database().ref(`users/${uid}`).once('value');
        const data = {...snapshot.val(), uid};
        await storeData('user', data);
        dispatch(setUser(data));
      } catch (error) {
        return error;
      }
    },
    [dispatch],
  );

  const login = () => {
    dispatch(setLoading(true));

    auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then((response) => {
        fetchUser(response.user.uid).then(() => {
          dispatch(setLoading(false));
          navigation.replace('MainApp');
        });
      })
      .catch((error) => {
        let errorMessage: string;

        switch (error.code) {
          case 'auth/user-not-found':
            errorMessage = 'Akun anda tidak terdaftar.';
            break;
          case 'auth/wrong-password':
            errorMessage = 'Email/Password anda salah.';
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
      <ScrollView showsVerticalScrollIndicator={false}>
        <ILLogo />
        <Text style={styles.text}>Masuk dan mulai berkonsultasi</Text>
        <InputComponent
          label="Email Address"
          value={credentials.email}
          onChangeText={(value) =>
            setCredentials({...credentials, email: value})
          }
        />
        <SpaceComponent height={24} />
        <InputComponent
          label="Password"
          type="password"
          value={credentials.password}
          onChangeText={(value) =>
            setCredentials({...credentials, password: value})
          }
        />
        <LinkComponent label="Forgot My Password" onPress={() => null} />
        <SpaceComponent height={30} />
        <ButtomComponent label="Login" onPress={login} />
        <SpaceComponent height={40} />
        <LinkComponent
          size={16}
          label="Create New Account"
          align="center"
          onPress={() => navigation.navigate('Register')}
        />
      </ScrollView>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 40,
    backgroundColor: colors.white,
  },
  text: {
    fontFamily: fonts.primary[600],
    fontSize: 20,
    color: colors.text.primary,
    marginVertical: 40,
    maxWidth: 155,
  },
});
