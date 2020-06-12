import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  ButtomComponent,
  HeaderComponent,
  InputComponent,
  SpaceComponent,
} from '../../components';
import {colors} from '../../utilities';
import {RootStackNavProps} from '../../routes/RootStackParamList';

interface RegisterScreenProps {
  navigation: RootStackNavProps<'Register'>;
}

const RegisterScreen: React.FC<RegisterScreenProps> = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <HeaderComponent
        title="Daftar Akun"
        onPress={() => navigation.goBack()}
      />
      <View style={styles.content}>
        <InputComponent label="Full Name" />
        <SpaceComponent height={24} />
        <InputComponent label="Pekerjaan" />
        <SpaceComponent height={24} />
        <InputComponent label="Email Password" />
        <SpaceComponent height={24} />
        <InputComponent label="Password" />
        <SpaceComponent height={40} />
        <ButtomComponent
          label="Continue"
          onPress={() => navigation.navigate('UploadPhoto')}
        />
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
