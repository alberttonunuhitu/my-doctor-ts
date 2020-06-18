import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  DummyDoctor4,
  DummyDoctor5,
  DummyDoctor6,
  DummyDoctor7,
  DummyDoctor8,
} from '../../assets';
import {
  RootStackNavProps,
  RootStackRouteProps,
} from '../../routes/RootStackParamList';
import {HeaderComponent, ListComponent} from '../../components';
import {colors, toTitleCase} from '../../utilities';

interface ChooseDoctorScreenProps {
  navigation: RootStackNavProps<'ChooseDoctor'>;
  route: RootStackRouteProps<'ChooseDoctor'>;
}

const ChooseDoctorScreen: React.FC<ChooseDoctorScreenProps> = ({
  navigation,
  route,
}) => {
  return (
    <View style={styles.screen}>
      <HeaderComponent
        title={`Pilih ${toTitleCase(route.params.name)}`}
        type="dark"
        onPress={() => navigation.goBack()}
      />
      <ListComponent
        type="next"
        avatar={DummyDoctor4}
        name="Alexander Jannie"
        description="Perempuan"
        onPress={() => navigation.navigate('Chatting')}
      />
      <ListComponent
        type="next"
        avatar={DummyDoctor6}
        name="John McParker Steve"
        description="Pria"
        onPress={() => navigation.navigate('Chatting')}
      />
      <ListComponent
        type="next"
        avatar={DummyDoctor7}
        name="Nairobi Putri Hayza"
        description="Perempuan"
        onPress={() => navigation.navigate('Chatting')}
      />
      <ListComponent
        type="next"
        avatar={DummyDoctor8}
        name="James Rivillia"
        description="Pria"
        onPress={() => navigation.navigate('Chatting')}
      />
      <ListComponent
        type="next"
        avatar={DummyDoctor5}
        name="Liu Yue Tian Park"
        description="Perempuan"
        onPress={() => navigation.navigate('Chatting')}
      />
    </View>
  );
};

export default ChooseDoctorScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
