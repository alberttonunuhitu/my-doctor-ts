import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../utilities';

interface NewsComponentProps {
  title: string;
  createdAt: string;
  image: string;
}

const NewsComponent: React.FC<NewsComponentProps> = ({
  title,
  createdAt,
  image,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapperText}>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.dateText}>{createdAt}</Text>
      </View>
      <Image source={{uri: image}} style={styles.image} />
    </View>
  );
};

export default NewsComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    paddingBottom: 12,
    paddingTop: 16,
    paddingHorizontal: 16,
  },
  wrapperText: {
    flex: 1,
  },
  titleText: {
    fontFamily: fonts.primary[600],
    fontSize: 16,
    color: colors.text.primary,
    maxWidth: '90%',
  },
  dateText: {
    fontFamily: fonts.primary.normal,
    fontSize: 12,
    color: colors.text.secondary,
    marginTop: 4,
  },
  image: {
    width: 80,
    height: 60,
    borderRadius: 11,
  },
});
