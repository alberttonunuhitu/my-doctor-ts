import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DummyDoctor7} from '../../../assets';
import {colors, fonts} from '../../../utilities';

interface OtherChatComponentProps {}

const OtherChatComponent: React.FC<OtherChatComponentProps> = ({}) => {
  return (
    <View style={styles.container}>
      <Image source={DummyDoctor7} style={styles.avatar} />
      <View>
        <View style={styles.content}>
          <Text style={styles.text}>
            Ibu dokter, apakah memakan jeruk tiap hari itu buruk?
          </Text>
        </View>
        <Text style={styles.textDate}>4.20 AM</Text>
      </View>
    </View>
  );
};

export default OtherChatComponent;

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    paddingLeft: 16,
    marginBottom: 20,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    marginRight: 12,
  },
  content: {
    maxWidth: '80%',
    padding: 12,
    paddingRight: 18,
    backgroundColor: colors.primary,
    borderRadius: 10,
    borderBottomLeftRadius: 0,
  },
  text: {
    fontFamily: fonts.primary.normal,
    fontSize: 14,
    color: colors.white,
  },
  textDate: {
    fontFamily: fonts.primary.normal,
    fontSize: 11,
    color: colors.text.secondary,
    marginTop: 8,
  },
});
