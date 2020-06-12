import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {ILLogo} from '../../assets';
import {
  ButtomComponent,
  InputComponent,
  LinkComponent,
  SpaceComponent,
} from '../../components';
import {colors, fonts} from '../../utilities';
import {RootStackNavProps} from '../../routes/RootStackParamList';

interface LoginScreenProps {
  navigation: RootStackNavProps<'Login'>;
}

const LoginScreen: React.FC<LoginScreenProps> = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <ILLogo />
      <Text style={styles.text}>Masuk dan mulai berkonsultasi</Text>
      <InputComponent label="Email Address" />
      <SpaceComponent height={24} />
      <InputComponent label="Password" />
      <LinkComponent label="Forgot My Password" onPress={() => null} />
      <SpaceComponent height={30} />
      <ButtomComponent
        label="Login"
        onPress={() => navigation.replace('MainApp')}
      />
      <SpaceComponent height={40} />
      <LinkComponent
        size={16}
        label="Create New Account"
        align="center"
        onPress={() => navigation.navigate('Register')}
      />
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
