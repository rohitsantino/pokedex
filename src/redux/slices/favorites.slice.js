import { createSlice } from '@reduxjs/toolkit';

const initialState = { favorites: [] }

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites(state,action) {
      console.log(action.payload);
      const addedPokemons=[...state.favorites,action.payload];
      return {...state,favorites:addedPokemons};
    },
    removeFromFavorites(state,action) {
      const filteredFavorites=state.favorites.filter(favorite=>favorite.id!=action.payload.id);
      return {...state,favorites:filteredFavorites};
    },
  },
})

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions
export default favoritesSlice.reducer