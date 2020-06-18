import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {RootStackNavProps} from '../../routes/RootStackParamList';
import {ILLogo} from '../../assets';
import {colors, fonts, storeData} from '../../utilities';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import {useDispatch} from 'react-redux';
import {setUser} from '../..//store';

interface SplashScreenProps {
  navigation: RootStackNavProps<'Splash'>;
}

const SplashScreen: React.FC<SplashScreenProps> = ({navigation}) => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged((user) => {
      if (user) {
        database()
          .ref(`users/${user.uid}`)
          .once('value')
          .then((snapshot) => {
            const data = {...snapshot.val(), uid: user.uid};
            storeData('user', data).then(() => {
              dispatch(setUser(data));
              return navigation.replace('MainApp');
            });
          });
      }

      return navigation.replace('GettingStarted');
    });

    return () => {
      unsubscribe();
    };
  }, [dispatch, navigation]);

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
