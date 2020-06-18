import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';

export type RootStackParamList = {
  Splash: undefined;
  GettingStarted: undefined;
  Register: undefined;
  Login: undefined;
  UploadPhoto: undefined;
  MainApp: undefined;
  ChooseDoctor: {
    id: string;
    name: string;
  };
  Chatting: undefined;
  User: undefined;
  EditProfile: undefined;
  DoctorProfile: undefined;
};

export type RootStackNavProps<
  T extends keyof RootStackParamList
> = StackNavigationProp<RootStackParamList, T>;

export type RootStackRouteProps<T extends keyof RootStackParamList> = RouteProp<
  RootStackParamList,
  T
>;
