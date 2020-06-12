import React from 'react';
import {StyleSheet, View} from 'react-native';
import {DummyDoctor1} from '../../assets';
import {HeaderComponent, DoctorComponent} from '../../components';
import {colors} from '../../utilities';
import {RootStackNavProps} from '../../routes/RootStackParamList';

interface ChooseDoctorScreenProps {
  navigation: RootStackNavProps<'ChooseDoctor'>;
}

const ChooseDoctorScreen: React.FC<ChooseDoctorScreenProps> = ({
  navigation,
}) => {
  return (
    <View style={styles.screen}>
      <HeaderComponent
        title="Pilih Dokter Anak"
        type="dark"
        onPress={() => navigation.goBack()}
      />
      <DoctorComponent
        type="next"
        avatar={DummyDoctor1}
        name="Alexander Jannie"
        description="Perempuan"
        onPress={() => navigation.navigate('Chatting')}
      />
      <DoctorComponent
        type="next"
        avatar={DummyDoctor1}
        name="Alexander Jannie"
        description="Perempuan"
        onPress={() => null}
      />
      <DoctorComponent
        type="next"
        avatar={DummyDoctor1}
        name="Alexander Jannie"
        description="Perempuan"
        onPress={() => null}
      />
      <DoctorComponent
        type="next"
        avatar={DummyDoctor1}
        name="Alexander Jannie"
        description="Perempuan"
        onPress={() => null}
      />
      <DoctorComponent
        type="next"
        avatar={DummyDoctor1}
        name="Alexander Jannie"
        description="Perempuan"
        onPress={() => null}
      />
    </View>
  );
};

export default ChooseDoctorScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
