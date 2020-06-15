import React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import {
  SpaceComponent,
  UserHeaderComponent,
  DoctorCategoryComponent,
  DoctorRatingComponent,
  NewsComponent,
} from '../../components';
import {colors, fonts, showError} from '../../utilities';
import {
  JSONDoctorCategories,
  DummyDoctor1,
  DummyDoctor2,
  DummyDoctor3,
} from '../../assets';
import {RootStackNavProps} from '../../routes/RootStackParamList';
import database, {FirebaseDatabaseTypes} from '@react-native-firebase/database';

interface DoctorScreenProps {
  navigation: RootStackNavProps<'MainApp'>;
}

interface DoctorCategory {
  id: number;
  category: string;
}

interface News {
  id: string;
  title: string;
  body: string;
  image: string;
  createdAt: string;
}

const DoctorScreen: React.FC<DoctorScreenProps> = ({navigation}) => {
  const [news, setNews] = React.useState<News[]>([]);

  const NewsAPI = async () => {
    try {
      const snapshot = await database().ref('news/').once('value');
      let array: News[] = [];

      if (snapshot.val()) {
        snapshot.forEach((element: FirebaseDatabaseTypes.DataSnapshot) => {
          array.push(element.val());
        });
      }

      return array;
    } catch (error) {
      showError(error.message);
      return [];
    }
  };

  React.useEffect(() => {
    NewsAPI().then((response) => {
      setNews(response);
    });
  }, []);

  return (
    <View style={styles.screen}>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.wrapperSection}>
            <SpaceComponent height={30} />
            <UserHeaderComponent onPress={() => navigation.navigate('User')} />
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
            <DoctorRatingComponent
              avatar={DummyDoctor1}
              name="Alexa Rachel"
              description="Pediatrician"
              onPress={() => navigation.navigate('DoctorProfile')}
            />
            <DoctorRatingComponent
              avatar={DummyDoctor2}
              name="Sunny Frank"
              description="Dentist"
              onPress={() => navigation.navigate('DoctorProfile')}
            />
            <DoctorRatingComponent
              avatar={DummyDoctor3}
              name="Poe Minn"
              description="Podiatrist"
              onPress={() => navigation.navigate('DoctorProfile')}
            />
            <Text style={styles.sectionTitle}>Good News</Text>
          </View>
          {news.map((element) => {
            return (
              <NewsComponent
                key={element.id}
                title={element.title}
                createdAt={element.createdAt}
                image={element.image}
              />
            );
          })}
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
