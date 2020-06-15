import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomTabComponent} from '../components';
import {
  SplashScreen,
  GettingStartedScreen,
  RegisterScreen,
  LoginScreen,
  UploadPhotoScreen,
  DoctorScreen,
  MessageScreen,
  HospitalsScreen,
  ChooseDoctorScreen,
  ChattingScreen,
  UserScreen,
  EditProfileScreen,
  DoctorProfileScreen,
} from '../screens';
import {RootStackParamList} from './RootStackParamList';
import {RootBottomTabParamList} from './RootBottomTabParamList';

interface RoutesProps {}

const RootStack = createStackNavigator<RootStackParamList>();
const RootBottomTab = createBottomTabNavigator<RootBottomTabParamList>();

const MainApp: React.FC = () => {
  return (
    <RootBottomTab.Navigator
      tabBar={(props) => <BottomTabComponent {...props} />}
      initialRouteName="Doctor">
      <RootBottomTab.Screen name="Doctor" component={DoctorScreen} />
      <RootBottomTab.Screen name="Message" component={MessageScreen} />
      <RootBottomTab.Screen name="Hospitals" component={HospitalsScreen} />
    </RootBottomTab.Navigator>
  );
};

const Routes: React.FC<RoutesProps> = ({}) => {
  return (
    <RootStack.Navigator
      initialRouteName="Splash"
      screenOptions={{headerShown: false}}>
      <RootStack.Screen name="Splash" component={SplashScreen} />
      <RootStack.Screen
        name="GettingStarted"
        component={GettingStartedScreen}
      />
      <RootStack.Screen name="Register" component={RegisterScreen} />
      <RootStack.Screen name="Login" component={LoginScreen} />
      <RootStack.Screen name="UploadPhoto" component={UploadPhotoScreen} />
      <RootStack.Screen name="MainApp" component={MainApp} />
      <RootStack.Screen name="ChooseDoctor" component={ChooseDoctorScreen} />
      <RootStack.Screen name="Chatting" component={ChattingScreen} />
      <RootStack.Screen name="User" component={UserScreen} />
      <RootStack.Screen name="EditProfile" component={EditProfileScreen} />
      <RootStack.Screen name="DoctorProfile" component={DoctorProfileScreen} />
    </RootStack.Navigator>
  );
};

export default Routes;
