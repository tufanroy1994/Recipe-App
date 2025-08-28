import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { axiosClient } from '../../config/Axios';
import { ApiEndpoints } from '../../config/ApiConstants';

const RECIPE = 'RECIPE';

interface InitialStateType {
  isLoading: boolean;
  recipeData: RecipeDetailsDataType[] | [];
}

const initialState: InitialStateType = {
  isLoading: false,
  recipeData: [],
};

export interface RecipeDetailsDataType {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strTags?: string;
  strYoutube?: string;
  strIngredient1?: string;
  strIngredient2?: string;
  strIngredient3?: string;
  strIngredient4?: string;
  strIngredient5?: string;
  strIngredient6?: string;
  strIngredient7?: string;
  strIngredient8?: string;
  strIngredient9?: string;
  strIngredient10?: string;
  strIngredient11?: string;
  strIngredient12?: string;
  strIngredient13?: string;
  strIngredient14?: string;
  strIngredient15?: string;
  strIngredient16?: string;
  strIngredient17?: string;
  strIngredient18?: string;
  strIngredient19?: string;
  strIngredient20?: string;
  strMeasure1: string;
  strMeasure2: string;
  strMeasure3: string;
  strMeasure4: string;
  strMeasure5: string;
  strMeasure6: string;
  strMeasure7: string;
  strMeasure8: string;
  strMeasure9: string;
  strMeasure10: string;
  strMeasure11: string;
  strMeasure12: string;
  strMeasure13: string;
  strMeasure14: string;
  strMeasure15: string;
  strMeasure16: string;
  strMeasure17: string;
  strMeasure18: string;
  strMeasure19: string;
  strMeasure20: string;
  strSource?: string;
}

interface GetRecipeDetailsReturnType {
  message: string;
  meals: RecipeDetailsDataType[];
}

interface GetRecipeDetailsParamType {
  search?: string;
}

export const getRecipeDetails = createAsyncThunk<
  GetRecipeDetailsReturnType,
  GetRecipeDetailsParamType,
  { rejectValue: any }
>(RECIPE + '/getRecipeDetails', async (params, { rejectWithValue }) => {
  try {
    const searchQuery = params?.search ? `?s=${params.search}` : '?s=';
    const response = await axiosClient.get(
      ApiEndpoints.RECIPE_DATA + searchQuery,
    );
    return response.data;
  } catch (error: any) {
    return rejectWithValue(error?.response?.data);
  }
});

const RecipeSlice = createSlice({
  initialState,
  name: RECIPE,
  reducers: {},
  extraReducers(builder) {
    // getRecipeData
    builder.addCase(getRecipeDetails.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getRecipeDetails.fulfilled, (state, action) => {
      state.isLoading = false;
      state.recipeData = action.payload.meals;
    });
    builder.addCase(getRecipeDetails.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

export const RecipeActions = RecipeSlice.actions;

export default RecipeSlice.reducer;
