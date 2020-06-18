import React, {useState} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {ILNullPhoto, IconAddPhoto, IconRemovePhoto} from '../../assets';
import {
  HeaderComponent,
  ButtomComponent,
  SpaceComponent,
  LinkComponent,
} from '../../components';
import {colors, fonts, showError, storeData} from '../../utilities';
import {RootStackNavProps} from '../../routes/RootStackParamList';
import ImagePicker, {ImagePickerOptions} from 'react-native-image-picker';
import database from '@react-native-firebase/database';
import {useDispatch, useSelector} from 'react-redux';
import {setLoading, setUser, RootState} from '../../store';

interface UploadPhotoScreenProps {
  navigation: RootStackNavProps<'UploadPhoto'>;
}

const UploadPhotoScreen: React.FC<UploadPhotoScreenProps> = ({navigation}) => {
  const [hasPhoto, setHasPhoto] = useState(false);
  const [photo, setPhoto] = useState(ILNullPhoto);
  const [photoDB, setPhotoDB] = useState('');
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const getImageFromLibrary = () => {
    const imagePickerOptions: ImagePickerOptions = {
      quality: 0.5,
      maxHeight: 200,
      maxWidth: 200,
    };

    ImagePicker.launchImageLibrary(imagePickerOptions, (response) => {
      if (response.error) {
        showError(response.error);
      }

      if (!response.didCancel) {
        setHasPhoto(true);
        setPhoto({uri: response.uri});
        setPhotoDB(`data:${response.type};base64, ${response.data}`);
      }
    });
  };

  const removeImage = () => {
    setHasPhoto(false);
    setPhoto(ILNullPhoto);
    setPhotoDB('');
  };

  const onUploadAndContinue = async () => {
    dispatch(setLoading(true));
    const data = {...user, photo: photoDB};
    await database().ref(`users/${user.uid}`).update({photo: data.photo});
    await storeData('user', data);
    dispatch(setUser(data));
    dispatch(setLoading(false));
    navigation.replace('MainApp');
  };

  return (
    <View style={styles.screen}>
      <HeaderComponent
        title="Upload Photo"
        onPress={() => navigation.goBack()}
      />
      <View style={styles.content}>
        <View style={styles.sectionUploadPhoto}>
          <View style={styles.wrapperAvatar}>
            <Image source={photo} style={styles.avatar} />
            {hasPhoto ? (
              <TouchableOpacity
                style={styles.wrapperIcon}
                onPress={removeImage}>
                <IconRemovePhoto />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.wrapperIcon}
                onPress={getImageFromLibrary}>
                <IconAddPhoto />
              </TouchableOpacity>
            )}
          </View>
          <Text style={styles.textName}>{user.fullName}</Text>
          <Text style={styles.textProfession}>{user.profession}</Text>
        </View>
        <View>
          <ButtomComponent
            label="Upload and Continue"
            isDisabled={!hasPhoto}
            onPress={onUploadAndContinue}
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
    borderRadius: 110 / 2,
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
