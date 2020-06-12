import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  HeaderComponent,
  ProfileComponent,
  InputReadOnlyComponent,
  ButtomComponent,
  SpaceComponent,
} from '../../components';
import {RootStackNavProps} from '../../routes/RootStackParamList';
import {colors} from '../../utilities';

interface DoctorProfileScreenProps {
  navigation: RootStackNavProps<'DoctorProfile'>;
}

const DoctorProfileScreen: React.FC<DoctorProfileScreenProps> = ({
  navigation,
}) => {
  return (
    <View style={styles.screen}>
      <HeaderComponent
        title="Doctor Profile"
        onPress={() => navigation.goBack()}
      />
      <ProfileComponent name="Nairobi Putri Hayza" description="Dokter Anak" />
      <SpaceComponent height={10} />
      <InputReadOnlyComponent
        label="Alumnus"
        value="Universitas Indonesia, 2020"
      />
      <InputReadOnlyComponent
        label="Tempat Praktik"
        value="Rumah Sakit Umum, Bandung"
      />
      <InputReadOnlyComponent label="No. STR" value="0000116622081996" />
      <View style={styles.sectionButton}>
        <ButtomComponent
          label="Start Consultation"
          onPress={() => navigation.navigate('Chatting')}
        />
      </View>
    </View>
  );
};

export default DoctorProfileScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.white,
  },
  sectionButton: {
    paddingTop: 23,
    paddingHorizontal: 40,
  },
});
