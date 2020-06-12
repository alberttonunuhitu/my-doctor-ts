import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  DummyDoctor4,
  DummyDoctor5,
  DummyDoctor6,
  DummyDoctor7,
  DummyDoctor8,
} from '../../assets';
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
        avatar={DummyDoctor4}
        name="Alexander Jannie"
        description="Perempuan"
        onPress={() => null}
      />
      <DoctorComponent
        type="next"
        avatar={DummyDoctor6}
        name="John McParker Steve"
        description="Pria"
        onPress={() => null}
      />
      <DoctorComponent
        type="next"
        avatar={DummyDoctor7}
        name="Nairobi Putri Hayza"
        description="Perempuan"
        onPress={() => navigation.navigate('Chatting')}
      />
      <DoctorComponent
        type="next"
        avatar={DummyDoctor8}
        name="James Rivillia"
        description="Pria"
        onPress={() => null}
      />
      <DoctorComponent
        type="next"
        avatar={DummyDoctor5}
        name="Liu Yue Tian Park"
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
