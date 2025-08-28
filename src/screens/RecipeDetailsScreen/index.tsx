import React from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Linking,
  Alert,
} from 'react-native';

import { BaseTab, BaseText } from '../../components';
import { AppImages, AppStrings } from '../../utils';
import { useAppNavigation } from '../../hooks';
import { useRoute } from '@react-navigation/native';
import { RootRouteProps } from '../../navigation/types/RootStackTypes';
import { styles } from './styles';

const RecipeDetailsScreen = () => {
  const { params } = useRoute<RootRouteProps<'RecipeDetailsScreen'>>();
  const navigation = useAppNavigation('RecipeDetailsScreen');

  // ✅ Extract ingredients with measures
  const getIngredientsWithMeasures = (recipe: any) => {
    const ingredients: { ingredient: string; measure: string }[] = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = recipe[`strIngredient${i}`];
      const measure = recipe[`strMeasure${i}`];
      if (ingredient && ingredient.trim() !== '') {
        ingredients.push({
          ingredient: ingredient.trim(),
          measure: measure && measure.trim() !== '' ? measure.trim() : '-',
        });
      }
    }
    return ingredients;
  };

  const ingredients = getIngredientsWithMeasures(params.recipe);

  return (
    <View style={[styles.flexContainer]}>
      <View style={[styles.contentContainer]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={AppImages.LEFT_ARROW} style={[styles.arrow]} />
        </TouchableOpacity>
        <BaseText style={[styles.headerText]}>
          {AppStrings.recipe_details}
        </BaseText>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 30 }}
        >
          {/* Image */}
          <Image
            source={{ uri: params.recipe.strMealThumb }}
            style={[styles.image]}
          />

          {/* Name */}
          <View style={[styles.titleBox]}>
            <BaseTab title={AppStrings.recipe_name} />
          </View>
          <BaseText style={[styles.name]}>{params.recipe.strMeal}</BaseText>

          {/* Origin */}
          <View style={[styles.titleBox]}>
            <BaseTab title={AppStrings.origin} />
          </View>
          <BaseText style={[styles.origin]}>{params.recipe.strArea}</BaseText>

          {/* Category */}
          <View style={[styles.titleBox]}>
            <BaseTab title={AppStrings.category} />
          </View>
          <BaseText style={[styles.category]}>
            {params.recipe.strCategory}
          </BaseText>

          {/* Instructions */}
          <View style={[styles.titleBox]}>
            <BaseTab title={AppStrings.instructions} />
          </View>
          <BaseText style={[styles.instruction]}>
            {params.recipe.strInstructions}
          </BaseText>

          {/* Watch Video */}
          <View style={[styles.titleBox]}>
            <BaseTab title={AppStrings.watch_video} />
          </View>
          <TouchableOpacity
            onPress={() => {
              if (params.recipe.strYoutube) {
                Linking.openURL(params.recipe.strYoutube).catch(err =>
                  Alert.alert('Failed to open URL:', err),
                );
              }
            }}
          >
            <BaseText style={[styles.video]}>
              {params.recipe.strYoutube}
            </BaseText>
          </TouchableOpacity>

          {/* Source */}
          <View style={[styles.titleBox]}>
            <BaseTab title={AppStrings.source} />
          </View>
          <TouchableOpacity
            onPress={() => {
              if (params.recipe.strSource) {
                Linking.openURL(params.recipe.strSource).catch(err =>
                  Alert.alert('Failed to open URL:', err),
                );
              }
            }}
          >
            <BaseText style={[styles.source]}>
              {params.recipe.strSource}
            </BaseText>
          </TouchableOpacity>

          {/* Ingredients with Measures*/}
          <View style={[styles.titleBox1]}>
            <BaseTab title={AppStrings.ingredients_measures} />
          </View>

          <View style={styles.ingredientContainer}>
            <View style={styles.tableHeader}>
              <BaseText style={styles.tableHeaderText}>
                {AppStrings.ingredients}
              </BaseText>
              <BaseText style={styles.tableHeaderText}>
                {AppStrings.measures}
              </BaseText>
            </View>
            {ingredients.map((item, index) => (
              <View key={index} style={styles.tableRow}>
                <BaseText style={styles.tableCell}>{item.ingredient}</BaseText>
                <BaseText style={styles.tableCell}>{item.measure}</BaseText>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default RecipeDetailsScreen;
