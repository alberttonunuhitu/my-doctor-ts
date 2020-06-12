import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {DummyDoctor7} from '../../assets';
import {
  HeaderComponent,
  ChatComponent,
  InputChatComponent,
} from '../../components';
import {fonts, colors} from '../../utilities';
import {RootStackNavProps} from '../../routes/RootStackParamList';

interface ChattingScreenProps {
  navigation: RootStackNavProps<'Chatting'>;
}

const ChattingScreen: React.FC<ChattingScreenProps> = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <HeaderComponent
        type="dark-profile"
        title="Nairobi Putri Hayza"
        category="Dokter Anak"
        avatar={DummyDoctor7}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.content}>
        <Text style={styles.textDate}>Senin, 21 Maret, 2020</Text>
        <ChatComponent isMe={true} />
        <ChatComponent isMe={false} />
        <ChatComponent isMe={true} />
      </View>
      <InputChatComponent isDisable={false} onPress={() => null} />
    </View>
  );
};

export default ChattingScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    flex: 1,
  },
  textDate: {
    fontFamily: fonts.primary.normal,
    fontSize: 11,
    color: colors.text.secondary,
    textAlign: 'center',
    marginVertical: 20,
  },
});
