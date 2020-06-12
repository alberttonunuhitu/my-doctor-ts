import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../utilities';

interface OwnChatComponentProps {}

const OwnChatComponent: React.FC<OwnChatComponentProps> = ({}) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>
          Ibu dokter, apakah memakan jeruk tiap hari itu buruk?
        </Text>
      </View>
      <Text style={styles.textDate}>4.20 AM</Text>
    </View>
  );
};

export default OwnChatComponent;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    paddingRight: 16,
    alignItems: 'flex-end',
  },
  content: {
    maxWidth: '75%',
    padding: 12,
    paddingRight: 18,
    backgroundColor: colors.card.primary,
    borderRadius: 10,
    borderBottomRightRadius: 0,
  },
  text: {
    fontFamily: fonts.primary.normal,
    fontSize: 14,
    color: colors.text.primary,
  },
  textDate: {
    fontFamily: fonts.primary.normal,
    fontSize: 11,
    color: colors.text.secondary,
    marginTop: 8,
  },
});
