import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {
  HeaderComponent,
  ProfileComponent,
  InputComponent,
  ButtomComponent,
  SpaceComponent,
} from '../../components';
import {colors} from '../../utilities';
import {RootStackNavProps} from '../../routes/RootStackParamList';

interface EditProfileScreenProps {
  navigation: RootStackNavProps<'EditProfile'>;
}

const EditProfileScreen: React.FC<EditProfileScreenProps> = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <HeaderComponent
        title="Edit Profile"
        onPress={() => navigation.goBack()}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <ProfileComponent />
          <SpaceComponent height={26} />
          <InputComponent label="Full Name" />
          <SpaceComponent height={24} />
          <InputComponent label="Pekerjaan" />
          <SpaceComponent height={24} />
          <InputComponent label="Email" />
          <SpaceComponent height={24} />
          <InputComponent label="Password" />
          <SpaceComponent height={40} />
          <ButtomComponent
            label="Save Profile"
            onPress={() => navigation.navigate('User')}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default EditProfileScreen;

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
