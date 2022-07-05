import { configureStore, combineReducers } from '@reduxjs/toolkit'
import favoritesReducer from '../reducers/favorites'
import jobsReducer from '../reducers/jobs'

const mainReducer = combineReducers({
    favorites: favoritesReducer,
    jobs: jobsReducer,
})

const store = configureStore({
    reducer: mainReducer
})

export default store