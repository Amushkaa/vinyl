import { configureStore } from "@reduxjs/toolkit";
import bagReducer from "./slices/bagReducer";
import favoriteReducer from "./slices/favoriteReducer";
import genreReducer from "./slices/genreReducer";
import searchReducer from "./slices/searchReducer";

export const store = configureStore({
  reducer: {
    search: searchReducer,
    genre: genreReducer,
    favorites: favoriteReducer,
    bag: bagReducer,
  },
});
