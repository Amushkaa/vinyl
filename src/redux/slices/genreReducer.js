import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  genre: "",
  artists: [],
  order: "",
  min: 0,
  max: 0,
};
export const genreSlice = createSlice({
  name: "genre",
  initialState,
  reducers: {
    setGenre: (state, action) => {
      state.genre = action.payload;
    },
    setOrder: (state, action) => {
      state.order = action.payload;
    },
    setArtistsRedux: (state, action) => {
      const currentItem = state.artists.find((name) => {
        return name == action.payload;
      });
      if (currentItem) {
        state.artists = state.artists.filter((name) => {
          return name != action.payload;
        });
      } else {
        state.artists.push(action.payload);
      }
    },
    setMin: (state, action) => {
      state.min = +action.payload;
    },
    setMax: (state, action) => {
      state.max = +action.payload;
    },
    resetAll: (state, action) => {
      state.min = 0;
      state.max = 0;
      state.genre = "";
      state.order = "";
      state.artists = [];
    },
  },
});

export const { setGenre, setArtistsRedux, setOrder, setMin, setMax, resetAll } =
  genreSlice.actions;
export default genreSlice.reducer;
