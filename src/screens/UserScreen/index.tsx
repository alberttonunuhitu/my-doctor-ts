import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  HeaderComponent,
  ProfileComponent,
  ListComponent,
  SpaceComponent,
} from '../../components';
import {RootStackNavProps} from '../../routes/RootStackParamList';
import {colors} from '../..//utilities';

interface UserScreenProps {
  navigation: RootStackNavProps<'User'>;
}

const UserScreen: React.FC<UserScreenProps> = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <HeaderComponent title="Profile" onPress={() => navigation.goBack()} />
      <SpaceComponent height={10} />
      <ProfileComponent />
      <SpaceComponent height={14} />
      <ListComponent
        type="next"
        icon="user"
        name="Edit Profile"
        description="Last updated yesterday"
        onPress={() => navigation.navigate('EditProfile')}
      />
      <ListComponent
        type="next"
        icon="language"
        name="Language"
        description="Available 12 languages"
        onPress={() => null}
      />
      <ListComponent
        type="next"
        icon="rating"
        name="Give Us Rate"
        description="On Google Play Store"
        onPress={() => null}
      />
      <ListComponent
        type="next"
        icon="help"
        name="Help Center"
        description="Read our guidelines"
        onPress={() => null}
      />
    </View>
  );
};

export default UserScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
