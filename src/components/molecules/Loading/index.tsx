import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../utilities';

interface LoadingComponentProps {}

const LoadingComponent: React.FC<LoadingComponentProps> = ({}) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={colors.primary} />
      <Text style={styles.text}>Loading...</Text>
    </View>
  );
};

export default LoadingComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: colors.loadingBackgroud,
  },
  text: {
    fontFamily: fonts.primary[600],
    fontSize: 18,
    color: colors.primary,
  },
});
