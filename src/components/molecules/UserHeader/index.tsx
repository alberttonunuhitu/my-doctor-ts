import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DummyUser} from '../../../assets';
import {colors, fonts} from '../../../utilities';

interface UserHeaderComponentProps {}

const UserHeaderComponent: React.FC<UserHeaderComponentProps> = ({}) => {
  return (
    <View style={styles.container}>
      <Image source={DummyUser} style={styles.avatar} />
      <View>
        <Text style={styles.nameText}>Shayna Melinda</Text>
        <Text style={styles.professionText}>Product Designer</Text>
      </View>
    </View>
  );
};

export default UserHeaderComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
    marginRight: 12,
  },
  nameText: {
    fontFamily: fonts.primary[600],
    fontSize: 16,
    color: colors.text.primary,
  },
  professionText: {
    fontFamily: fonts.primary.normal,
    fontSize: 12,
    color: colors.text.secondary,
  },
});
