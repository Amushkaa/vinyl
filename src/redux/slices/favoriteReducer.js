import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: JSON.parse(localStorage.getItem("favorite")) || [],
};
export const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    likeItem: (state, action) => {
      state.favorites.push(action.payload);
      localStorage.setItem("favorite", JSON.stringify(state.favorites));
    },
    dislikeItem: (state, action) => {
      state.favorites = state.favorites.filter(
        (obj) => obj.id != action.payload.id
      );
      localStorage.setItem("favorite", JSON.stringify(state.favorites));
    },
  },
});
export const selectCurrentLike = (id) => (state) =>
  state.favorites.favorites.find((obj) => obj.id == id);
export const { likeItem, dislikeItem } = favoriteSlice.actions;
export default favoriteSlice.reducer;
