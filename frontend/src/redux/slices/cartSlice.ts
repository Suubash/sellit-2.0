import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { IProduct } from "interfaces/category";

const initialState = <IProduct[]>[];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProduct>) => {
      const index = state.findIndex(
        (product) => product.id === action.payload.id
      );

      if (index === -1) {
        return [...state, action.payload];
      } else {
        const newState: any = [...state];
        newState[index] = {
          ...newState[index],
          quantity: newState[index].quantity + 1,
        };
        return newState;
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
