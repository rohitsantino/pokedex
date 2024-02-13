import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from '../slices/favorites.slice';

export const store=configureStore({
    reducer:{
        favorites:favoritesReducer
    }
})