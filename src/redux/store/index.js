import { configureStore, combineReducers } from '@reduxjs/toolkit'
import favoritesReducer from '../reducers/favorites'
import jobsReducer from '../reducers/jobs'

import { persistStore, persistReducer } from 'redux-persist'
import localStorage from 'redux-persist/lib/storage'
import { encryptTransform } from 'redux-persist-transform-encrypt'

const persistConfig = {
    key: 'root',
    storage: localStorage,
    transforms: [
        encryptTransform({
            secretKey: process.env.REACT_APP_SECRET_KEY,
        }),
    ],
}


const mainReducer = combineReducers({
    favorites: favoritesReducer,
    jobs: jobsReducer,
})

const persistedReducer = persistReducer(persistConfig, mainReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
            serializableCheck: false,
        })
    },
})


export const persistor = persistStore(store)