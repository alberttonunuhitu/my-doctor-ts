import React from 'react';
import {StyleSheet, ImageBackground, Text, View} from 'react-native';
import {
  ILHospitalsBG,
  DummyHospital1,
  DummyHospital2,
  DummyHospital3,
} from '../../assets';
import {HospitalComponent} from '../../components';
import {colors, fonts} from '../../utilities';

interface HospitalsScreenProps {}

const HospitalsScreen: React.FC<HospitalsScreenProps> = ({}) => {
  return (
    <View style={styles.page}>
      <ImageBackground source={ILHospitalsBG} style={styles.cover}>
        <Text style={styles.coverTitle}>Nearby Hospitals</Text>
        <Text style={styles.coverDescription}>3 tersedia</Text>
      </ImageBackground>
      <View style={styles.content}>
        <HospitalComponent
          type="Rumah Sakit"
          name="Citra Bunga Merdeka"
          address="Jln. Surya Sejahtera 20"
          picture={DummyHospital1}
        />
        <HospitalComponent
          type="Rumah Sakit Anak"
          name="Happy Family & Kids"
          address="Jln. Surya Sejahtera 20"
          picture={DummyHospital2}
        />
        <HospitalComponent
          type="Rumah Sakit Jiwa"
          name="Tingkatan Paling Atas"
          address="Jln. Surya Sejahtera 20"
          picture={DummyHospital3}
        />
      </View>
    </View>
  );
};

export default HospitalsScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  content: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: 20,
    marginTop: -30,
    paddingTop: 14,
  },
  cover: {
    height: 240,
    paddingTop: 30,
  },
  coverTitle: {
    fontFamily: fonts.primary[600],
    fontSize: 20,
    color: colors.white,
    textAlign: 'center',
  },
  coverDescription: {
    fontFamily: fonts.primary[300],
    fontSize: 14,
    color: colors.white,
    textAlign: 'center',
  },
});
