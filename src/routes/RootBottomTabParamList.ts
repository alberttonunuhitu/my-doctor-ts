import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {RouteProp} from '@react-navigation/native';

export type RootBottomTabParamList = {
  Doctor: undefined;
  Message: undefined;
  Hospitals: undefined;
};

export type RootBottomTabNavProps<
  T extends keyof RootBottomTabParamList
> = BottomTabNavigationProp<RootBottomTabParamList, T>;

export type RootBottomRouteProps<
  T extends keyof RootBottomTabParamList
> = RouteProp<RootBottomTabParamList, T>;
