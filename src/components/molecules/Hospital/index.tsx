import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../utilities';

interface HospitalComponentProps {
  type: string;
  name: string;
  address: string;
  picture: any;
}

const HospitalComponent: React.FC<HospitalComponentProps> = ({
  type,
  name,
  address,
  picture,
}) => {
  return (
    <View style={styles.container}>
      <Image source={picture} style={styles.picture} />
      <View>
        <Text style={styles.nameText}>{type}</Text>
        <Text style={styles.nameText}>{name}</Text>
        <Text style={styles.addressText}>{address}</Text>
      </View>
    </View>
  );
};

export default HospitalComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    padding: 16,
  },
  picture: {
    width: 80,
    height: 60,
    borderRadius: 11,
    marginRight: 16,
  },
  nameText: {
    fontFamily: fonts.primary.normal,
    fontSize: 16,
    color: colors.text.primary,
  },
  addressText: {
    fontFamily: fonts.primary[300],
    fontSize: 12,
    color: colors.text.secondary,
    marginTop: 6,
  },
});
