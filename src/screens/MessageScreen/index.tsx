import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {DummyDoctor4, DummyDoctor5, DummyDoctor6} from '../../assets';
import {ListComponent} from '../../components';
import {colors, fonts} from '../../utilities';

interface MessageScreenProps {}

const MessageScreen: React.FC<MessageScreenProps> = ({}) => {
  const [doctors] = useState([
    {
      id: 1,
      avatar: DummyDoctor4,
      name: 'Alexander Jannie',
      description: 'Baik ibu, terima kasih banyak atas wakt...',
    },
    {
      id: 2,
      avatar: DummyDoctor5,
      name: 'Nairobi Putri Hayza',
      description: 'Oh tentu saja tidak karena jeruk it...',
    },
    {
      id: 3,
      avatar: DummyDoctor6,
      name: 'John McParker Steve',
      description: 'Oke menurut pak dokter bagaimana unt...',
    },
  ]);

  return (
    <View style={styles.screen}>
      <View style={styles.content}>
        <Text style={styles.titleText}>Messages</Text>
        {doctors.map((doctor) => (
          <ListComponent
            key={doctor.id}
            avatar={doctor.avatar}
            name={doctor.name}
            description={doctor.description}
            onPress={() => null}
          />
        ))}
      </View>
    </View>
  );
};

export default MessageScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  content: {
    flex: 1,
    backgroundColor: colors.white,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  titleText: {
    fontFamily: fonts.primary[600],
    fontSize: 20,
    color: colors.text.primary,
    marginTop: 30,
    marginLeft: 16,
  },
});
