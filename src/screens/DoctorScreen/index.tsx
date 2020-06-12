import React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import {
  SpaceComponent,
  UserHeaderComponent,
  DoctorCategoryComponent,
  DoctorRatingComponent,
  NewsComponent,
} from '../../components';
import {colors, fonts} from '../../utilities';
import {JSONDoctorCategories} from '../../assets';
import {RootStackNavProps} from '../../routes/RootStackParamList';

interface DoctorScreenProps {
  navigation: RootStackNavProps<'MainApp'>;
}

interface DoctorCategory {
  id: number;
  category: string;
}

const DoctorScreen: React.FC<DoctorScreenProps> = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.wrapperSection}>
            <SpaceComponent height={30} />
            <UserHeaderComponent />
            <Text style={styles.description}>
              Mau konsultasi dengan siapa hari ini?
            </Text>
          </View>
          <View style={styles.wrapperScroll}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <SpaceComponent width={32} />
              {JSONDoctorCategories.data.map((element: DoctorCategory) => (
                <DoctorCategoryComponent
                  key={element.id}
                  label={element.category}
                  onPress={() => navigation.navigate('ChooseDoctor')}
                />
              ))}
              <SpaceComponent width={22} />
            </ScrollView>
          </View>
          <View style={styles.wrapperSection}>
            <Text style={styles.sectionTitle}>Top Rated Doctors</Text>
            <DoctorRatingComponent />
            <DoctorRatingComponent />
            <DoctorRatingComponent />
            <Text style={styles.sectionTitle}>Good News</Text>
          </View>
          <NewsComponent />
          <NewsComponent />
          <NewsComponent />
          <SpaceComponent height={30} />
        </ScrollView>
      </View>
    </View>
  );
};

export default DoctorScreen;

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
  description: {
    fontFamily: fonts.primary[600],
    fontSize: 20,
    color: colors.text.primary,
    marginTop: 30,
    marginBottom: 16,
    maxWidth: 215,
  },
  wrapperScroll: {
    marginHorizontal: -16,
  },
  wrapperSection: {
    paddingHorizontal: 16,
  },
  sectionCategory: {
    flexDirection: 'row',
  },
  sectionTitle: {
    fontFamily: fonts.primary[600],
    fontSize: 16,
    color: colors.text.primary,
    marginTop: 30,
    marginBottom: 16,
  },
});
