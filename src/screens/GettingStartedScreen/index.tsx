import React from 'react';
import {Text, View, ImageBackground, StyleSheet} from 'react-native';
import {ILLogo, ILGetStarted} from '../../assets';
import {ButtomComponent, SpaceComponent} from '../../components';
import {colors, fonts} from '../../utilities';
import {RootStackNavProps} from '../../routes/RootStackParamList';

interface GettingStartedScreenProps {
  navigation: RootStackNavProps<'GettingStarted'>;
}

const GettingStartedScreen: React.FC<GettingStartedScreenProps> = ({
  navigation,
}) => {
  return (
    <ImageBackground source={ILGetStarted} style={styles.screen}>
      <View>
        <ILLogo />
        <Text style={styles.text}>
          Konsultasi dengan dokter jadi lebih mudah & fleksibel
        </Text>
      </View>
      <View>
        <ButtomComponent
          label="Get Started"
          onPress={() => navigation.navigate('Register')}
        />
        <SpaceComponent height={16} />
        <ButtomComponent
          type="secondary"
          label="Login"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 40,
  },
  text: {
    fontFamily: fonts.primary[600],
    fontSize: 28,
    color: colors.white,
    marginTop: 91,
  },
});

export default GettingStartedScreen;
