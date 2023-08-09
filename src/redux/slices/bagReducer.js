import { createSlice } from "@reduxjs/toolkit";
import calcPriceAndCount from "../../utils/constants";

const initialState = {
  bag: JSON.parse(localStorage.getItem("bag")) || [],
  totalCount: JSON.parse(localStorage.getItem("totalCount")) || 0,
  realPrice: JSON.parse(localStorage.getItem("realPrice")) || 0,
  discountPrice: JSON.parse(localStorage.getItem("discountPrice")) || 0,
};
export const bagSlice = createSlice({
  name: "bag",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const currentBag = state.bag.find((obj) => obj.id == action.payload.id);
      if (currentBag) {
        currentBag.count++;
      } else {
        state.bag.push({ ...action.payload, count: 1 });
      }
      calcPriceAndCount(state);
    },
    removeItem: (state, action) => {
      state.bag = state.bag.filter((obj) => obj.id != action.payload.id);
      calcPriceAndCount(state);
    },
    decreaseItem: (state, action) => {
      const currentBag = state.bag.find((obj) => obj.id == action.payload.id);
      if (currentBag) {
        currentBag.count--;
      }
      calcPriceAndCount(state);
    },
  },
});
export const selectCurrentBag = (id) => (state) =>
  state.bag.bag.find((obj) => obj.id == id);
export const { addItem, removeItem, decreaseItem } = bagSlice.actions;
export default bagSlice.reducer;
