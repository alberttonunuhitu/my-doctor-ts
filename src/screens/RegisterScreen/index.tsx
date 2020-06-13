import React, {useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {
  ButtomComponent,
  HeaderComponent,
  InputComponent,
  SpaceComponent,
} from '../../components';
import {colors} from '../../utilities';
import {RootStackNavProps} from '../../routes/RootStackParamList';
import auth from '@react-native-firebase/auth';

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

  const [user, setUser] = useState<UserInterface>({
    fullName: '',
    profession: '',
    email: '',
    password: '',
  });

  const onCountinue = () => {
    auth()
      .createUserWithEmailAndPassword(user.email, user.password)
      .then(() => {
        // return navigation.navigate('UploadPhoto');
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
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
