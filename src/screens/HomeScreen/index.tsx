import React, { useEffect, useState } from 'react';
import { View, FlatList, Alert } from 'react-native';

import {
  BaseFormInput,
  BaseText,
  BaseRecipeCard,
  BaseLoader,
  BaseSeperator,
} from '../../components';
import { AppStrings } from '../../utils';
import { useAppDispatch, useAppNavigation, useAppSelector } from '../../hooks';
import {
  getRecipeDetails,
  RecipeDetailsDataType,
} from '../../redux/slices/RecipeSlice';
import { styles } from './styles';

const HomeScreen = () => {
  const navigation = useAppNavigation('HomeScreen');

  const dispatch = useAppDispatch();
  const { isLoading, recipeData } = useAppSelector(
    store => store.RecipeReducer,
  );

  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = (search?: string) => {
    dispatch(getRecipeDetails({ search }))
      .unwrap()
      .then(res => {
        console.log('Api data', res);
      })
      .catch(error => {
        Alert.alert(error?.message ?? AppStrings.something_went_wrong);
      });
  };

  const handleSearch = (text: string) => {
    setSearchText(text);
    fetchData(text); // trigger search
  };

  const renderItem = ({ item }: { item: RecipeDetailsDataType }) => (
    <BaseRecipeCard
      key={item.idMeal}
      recipeImage={item.strMealThumb}
      name={item.strMeal}
      area={item.strArea}
      onPress={() =>
        navigation.navigate('RecipeDetailsScreen', { recipe: item })
      }
    />
  );

  const renderEmptyComponent = () => (
    <View style={[styles.emptyListContainer]}>
      <BaseText style={styles.emptyListText}>
        {AppStrings.no_recipe_found}
      </BaseText>
    </View>
  );

  return (
    <View style={[styles.flexContainer]}>
      {isLoading && <BaseLoader />}
      <View style={[styles.contentContainer]}>
        <BaseText>{AppStrings.welcome_user}</BaseText>
        <BaseFormInput
          placeholder={AppStrings.search_your_food_here}
          value={searchText}
          onChangeText={handleSearch}
        />
        <View style={[styles.container]}>
          <BaseText>{AppStrings.food_item}</BaseText>
        </View>
        <FlatList
          data={recipeData}
          renderItem={renderItem}
          keyExtractor={item => item.idMeal}
          ItemSeparatorComponent={() => <BaseSeperator />}
          ListEmptyComponent={renderEmptyComponent}
          contentContainerStyle={styles.cardContainer}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
