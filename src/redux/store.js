import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authReducer from './auth/authSlice';
import shoppingListIngredientsReducer from './shoppingIngrs/shopSlice';
import themeReducer from './theme/themeSlice';
import { categoriesReducer } from './categories/categoriesSlice';

import { recipeReducer } from './recipes/recipeSlice';
import { popularReducer } from './popularRecipe/popularSlice';

import searchReducer from './search/searchSlice';
import favoriteReducer from './favoriteReceipts/favoriteReceiptsSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const themePersistConfig = {
  key: 'theme',
  storage,
};

const recipePersistConfig = {
  key: 'recipe',
  storage,
};

const popularPersistConfig = {
  key: 'popular',
  storage,
};

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    shoppingListIngredients: shoppingListIngredientsReducer,
    theme: persistReducer(themePersistConfig, themeReducer),
    categoriesStore: categoriesReducer,
    search: searchReducer,
    recipeMain: persistReducer(recipePersistConfig, recipeReducer),
    favoriteReceipt: favoriteReducer,
    popularRecipe: persistReducer(popularPersistConfig, popularReducer),
  },
  middleware,
});

export const persistor = persistStore(store);
