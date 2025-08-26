import { RouteProp } from '@react-navigation/native';

export type RootStackParamList = {
  WelcomeScreen: undefined;
  HomeScreen: undefined;
};

export type RootRouteProps<RouteName extends keyof RootStackParamList> =
  RouteProp<RootStackParamList, RouteName>;
