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


const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
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

    },
    middleware,
});

export const persistor = persistStore(store);

