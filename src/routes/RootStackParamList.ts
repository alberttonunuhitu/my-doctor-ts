import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';

export type RootStackParamList = {
  Splash: undefined;
  GettingStarted: undefined;
  Register: undefined;
  Login: undefined;
  UploadPhoto: undefined;
  MainApp: undefined;
  ChooseDoctor: undefined;
  Chatting: undefined;
};

export type RootStackNavProps<
  T extends keyof RootStackParamList
> = StackNavigationProp<RootStackParamList, T>;

export type RootStackRouteProps<T extends keyof RootStackParamList> = RouteProp<
  RootStackParamList,
  T
>;
