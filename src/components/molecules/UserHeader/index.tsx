import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {DummyUser} from '../../../assets';
import {colors, fonts} from '../../../utilities';

interface UserHeaderComponentProps {
  onPress: () => void;
}

const UserHeaderComponent: React.FC<UserHeaderComponentProps> = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={DummyUser} style={styles.avatar} />
      <View>
        <Text style={styles.nameText}>Shayna Melinda</Text>
        <Text style={styles.professionText}>Product Designer</Text>
      </View>
    </TouchableOpacity>
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
