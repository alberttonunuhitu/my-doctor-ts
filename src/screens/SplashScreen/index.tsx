import React, {useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {RootStackNavProps} from '../../routes/RootStackParamList';
import {ILLogo} from '../../assets';
import {colors, fonts} from '../../utilities';
import auth from '@react-native-firebase/auth';

interface SplashScreenProps {
  navigation: RootStackNavProps<'Splash'>;
}

const SplashScreen: React.FC<SplashScreenProps> = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      auth().onAuthStateChanged((user) => {
        if (user) {
          return navigation.replace('MainApp');
        }

        return navigation.replace('GettingStarted');
      });
    }, 3000);
  }, [navigation]);

  return (
    <View style={styles.screen}>
      <ILLogo />
      <Text style={styles.text}>My Doctor</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  text: {
    fontFamily: fonts.primary[600],
    fontSize: 20,
    color: colors.text.primary,
    marginTop: 20,
  },
});

export default SplashScreen;
