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
import {DummyDoctor1, DummyDoctor2, DummyDoctor3} from '../../assets';
import {RootStackNavProps} from '../../routes/RootStackParamList';
import database, {FirebaseDatabaseTypes} from '@react-native-firebase/database';

interface DoctorScreenProps {
  navigation: RootStackNavProps<'MainApp'>;
}

interface News {
  id: string;
  title: string;
  body: string;
  image: string;
  createdAt: string;
}

interface Category {
  id: string;
  name: string;
}

const DoctorScreen: React.FC<DoctorScreenProps> = ({navigation}) => {
  const [news, setNews] = React.useState<News[]>([]);
  const [categories, setCategories] = React.useState<Category[]>([]);

  const fetchNews = async () => {
    const list: News[] = [];
    const snapshot = await database().ref('news/').once('value');

    if (snapshot.val()) {
      snapshot.forEach((element: FirebaseDatabaseTypes.DataSnapshot) => {
        list.push(element.val());
      });
    }

    setNews(list);
  };

  const fetchCategories = async () => {
    const list: Category[] = [];
    const snapshot = await database().ref('categories/').once('value');

    if (snapshot.val()) {
      snapshot.forEach((element: FirebaseDatabaseTypes.DataSnapshot) => {
        list.push(element.val());
      });
    }

    setCategories(list);
  };

  React.useEffect(() => {
    fetchNews();
    fetchCategories();

    return () => {
      setNews([]);
      setCategories([]);
    };
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
              {categories.map((element: Category) => (
                <DoctorCategoryComponent
                  key={element.id}
                  label={element.name}
                  onPress={() => navigation.navigate('ChooseDoctor', element)}
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
