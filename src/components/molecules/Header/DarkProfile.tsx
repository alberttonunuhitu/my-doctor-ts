import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ButtomComponent} from '../../atoms';
import {colors, fonts} from '../../../utilities';

interface DarkProfileComponentProps {
  title: string;
  category: string | undefined;
  avatar: any;
  onPress: () => void;
}

const DarkProfileComponent: React.FC<DarkProfileComponentProps> = ({
  title,
  category,
  avatar,
  onPress,
}) => {
  return (
    <View style={styles.container}>
      <ButtomComponent type="icon-only" icon="back-light" onPress={onPress} />
      <View style={styles.wrapperText}>
        <Text style={styles.textName}>{title}</Text>
        <Text style={styles.textCategory}>{category}</Text>
      </View>
      <Image source={avatar} style={styles.avatar} />
    </View>
  );
};

export default DarkProfileComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    paddingVertical: 30,
    paddingLeft: 20,
    paddingRight: 16,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  wrapperText: {
    flex: 1,
  },
  textName: {
    fontFamily: fonts.primary[600],
    fontSize: 20,
    color: colors.white,
    textAlign: 'center',
  },
  textCategory: {
    fontFamily: fonts.primary.normal,
    fontSize: 14,
    color: colors.text.subTitle,
    textAlign: 'center',
    marginTop: 6,
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
  },
});
