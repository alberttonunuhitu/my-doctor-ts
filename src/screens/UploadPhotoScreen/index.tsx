import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {ILNullPhoto, IconAddPhoto} from '../../assets';
import {
  HeaderComponent,
  ButtomComponent,
  SpaceComponent,
  LinkComponent,
} from '../../components';
import {colors, fonts} from '../../utilities';
import {RootStackNavProps} from '../../routes/RootStackParamList';

interface UploadPhotoScreenProps {
  navigation: RootStackNavProps<'UploadPhoto'>;
}

const UploadPhotoScreen: React.FC<UploadPhotoScreenProps> = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <HeaderComponent
        title="Upload Photo"
        onPress={() => navigation.goBack()}
      />
      <View style={styles.content}>
        <View style={styles.sectionUploadPhoto}>
          <View style={styles.wrapperAvatar}>
            <Image source={ILNullPhoto} style={styles.avatar} />
            <View style={styles.wrapperIcon}>
              <IconAddPhoto />
            </View>
          </View>
          <Text style={styles.textName}>Shayna Melinda</Text>
          <Text style={styles.textProfession}>Product Designer</Text>
        </View>
        <View>
          <ButtomComponent
            label="Upload and Continue"
            onPress={() => navigation.replace('MainApp')}
          />
          <SpaceComponent height={30} />
          <LinkComponent
            label="Skip for this"
            size={16}
            align="center"
            onPress={() => navigation.replace('MainApp')}
          />
        </View>
      </View>
    </View>
  );
};

export default UploadPhotoScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    flex: 1,
    paddingHorizontal: 40,
    paddingBottom: 64,
    justifyContent: 'space-between',
  },
  sectionUploadPhoto: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapperAvatar: {
    width: 130,
    height: 130,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 130 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 110,
    height: 110,
  },
  wrapperIcon: {
    position: 'absolute',
    width: 30,
    height: 30,
    bottom: 8,
    right: 6,
  },
  textName: {
    fontFamily: fonts.primary[600],
    fontSize: 24,
    color: colors.text.primary,
    textAlign: 'center',
  },
  textProfession: {
    fontFamily: fonts.primary.normal,
    fontSize: 18,
    color: colors.text.secondary,
    textAlign: 'center',
  },
});
