import { RouteProp } from '@react-navigation/native';
import { RecipeDetailsDataType } from '../../redux/slices/RecipeSlice';

export type RootStackParamList = {
  WelcomeScreen: undefined;
  HomeScreen: undefined;
  RecipeDetailsScreen: { recipe: RecipeDetailsDataType };
};

export type RootRouteProps<RouteName extends keyof RootStackParamList> =
  RouteProp<RootStackParamList, RouteName>;
