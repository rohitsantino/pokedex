import { createSlice } from '@reduxjs/toolkit'

const initialState = { favorites: [] }

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites(state,action) {
      state.favorites=[...state.favorites,action.payload]
    },
    removeFromFavorites(state,action) {
      const filteredFavorites=state.favorites.filter(favorite=>favorite.id!=action.payload.id);
      state.favorites=[...filteredFavorites];
    },
  },
})

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions
export default favoritesSlice.reducer