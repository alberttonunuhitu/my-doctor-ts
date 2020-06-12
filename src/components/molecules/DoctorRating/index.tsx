import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {IconStar} from '../../../assets';
import {fonts, colors} from '../../../utilities';

interface DoctorRatingComponentProps {
  avatar: any;
  name: string;
  description: string;
  onPress: () => void;
}

const DoctorRatingComponent: React.FC<DoctorRatingComponentProps> = ({
  avatar,
  name,
  description,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={avatar} style={styles.avatar} />
      <View style={styles.wrapperContent}>
        <Text style={styles.nameText}>{name}</Text>
        <Text style={styles.categoryText}>{description}</Text>
      </View>
      <View style={styles.rating}>
        <IconStar />
        <IconStar />
        <IconStar />
        <IconStar />
        <IconStar />
      </View>
    </TouchableOpacity>
  );
};

export default DoctorRatingComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    marginRight: 12,
  },
  wrapperContent: {
    flex: 1,
  },
  nameText: {
    fontFamily: fonts.primary[600],
    fontSize: 16,
    color: colors.text.primary,
  },
  categoryText: {
    fontFamily: fonts.primary.normal,
    fontSize: 12,
    color: colors.text.secondary,
    marginTop: 2,
  },
  rating: {
    flexDirection: 'row',
  },
});
