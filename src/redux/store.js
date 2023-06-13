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
import searchReducer from './search/searchSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const themePersistConfig = {
  key: 'theme',
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
  },
  middleware,
});

export const persistor = persistStore(store);
