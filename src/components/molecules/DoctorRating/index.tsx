import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {DummyDoctor1, IconStar} from '../../../assets';
import {fonts, colors} from '../../../utilities';

interface DoctorRatingComponentProps {}

const DoctorRatingComponent: React.FC<DoctorRatingComponentProps> = ({}) => {
  return (
    <View style={styles.container}>
      <Image source={DummyDoctor1} style={styles.avatar} />
      <View style={styles.wrapperContent}>
        <Text style={styles.nameText}>Alexa Rachel</Text>
        <Text style={styles.categoryText}>Pediatrician</Text>
      </View>
      <View style={styles.rating}>
        <IconStar />
        <IconStar />
        <IconStar />
        <IconStar />
        <IconStar />
      </View>
    </View>
  );
};

export default DoctorRatingComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
