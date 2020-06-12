import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {HeaderComponent} from '../../components';
import {RootStackNavProps} from '../../routes/RootStackParamList';

interface ChattingScreenProps {
  navigation: RootStackNavProps<'Chatting'>;
}

const ChattingScreen: React.FC<ChattingScreenProps> = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <HeaderComponent
        type="dark"
        title="Nairobi Putri Hayza"
        onPress={() => navigation.goBack()}
      />
      <Text>ChattingScreen</Text>
    </View>
  );
};

export default ChattingScreen;

const styles = StyleSheet.create({
  screen: {},
});
