import logger from 'redux-logger';
import { persistReducer, persistStore } from 'redux-persist';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

import RecipeSlice from '../slices/RecipeSlice';

const reducers = combineReducers({
  RecipeReducer: RecipeSlice,
});

const rootReducer = (state: any, action: any) => {
  return reducers(state, action);
};

const persistedReducer = persistReducer(
  {
    key: 'root',
    storage: AsyncStorage,
  },
  rootReducer,
);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => {
    const middleware = getDefaultMiddleware({
      serializableCheck: false, // You can enable this if needed
    });
    return __DEV__ ? middleware.concat(logger) : middleware;
  },
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
