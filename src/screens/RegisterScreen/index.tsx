import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {
  ButtomComponent,
  HeaderComponent,
  InputComponent,
  SpaceComponent,
} from '../../components';
import {colors, showError, storeData} from '../../utilities';
import {RootStackNavProps} from '../../routes/RootStackParamList';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import {useDispatch} from 'react-redux';
import {setLoading, setUser, UserState} from '../../store';

interface RegisterScreenProps {
  navigation: RootStackNavProps<'Register'>;
}

const RegisterScreen: React.FC<RegisterScreenProps> = ({navigation}) => {
  interface UserForm {
    fullName: string;
    profession: string;
    email: string;
  }

  const initialForm: UserForm = {
    fullName: '',
    profession: '',
    email: '',
  };

  const [form, setForm] = React.useState<UserForm>(initialForm);
  const [password, setPassword] = React.useState<string>('');
  const dispatch = useDispatch();

  const postUser = async (uid: string, data: UserForm): Promise<UserState> => {
    try {
      await database().ref(`users/${uid}`).set(data);
      await storeData('user', {...data, uid});
      return {...data, uid};
    } catch (error) {
      return error;
    }
  };

  const onCountinue = () => {
    dispatch(setLoading(true));
    auth()
      .createUserWithEmailAndPassword(form.email, password)
      .then((response) => {
        const data = {...form};
        postUser(response.user.uid, data)
          .then((user) => {
            dispatch(setUser(user));
            dispatch(setLoading(false));
            navigation.navigate('UploadPhoto');
          })
          .catch((error) => {
            showError(error.message);
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
            value={form.fullName}
            onChangeText={(value) => setForm({...form, fullName: value})}
          />
          <SpaceComponent height={24} />
          <InputComponent
            label="Pekerjaan"
            value={form.profession}
            onChangeText={(value) => setForm({...form, profession: value})}
          />
          <SpaceComponent height={24} />
          <InputComponent
            label="Email"
            value={form.email}
            onChangeText={(value) => setForm({...form, email: value})}
          />
          <SpaceComponent height={24} />
          <InputComponent
            type="password"
            label="Password"
            value={password}
            onChangeText={(value) => setPassword(value)}
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
