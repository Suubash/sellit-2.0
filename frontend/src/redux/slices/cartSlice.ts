import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { IProduct } from "interfaces/category";

const initialState = <IProduct[]>[];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProduct>) => {
      console.log("Added only in console");
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
