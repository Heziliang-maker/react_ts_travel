import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ShoppingCartState {
  items: any[];
}

const initialState = {
  items: [],
} as ShoppingCartState;

export const shoppingCartSlice = createSlice({
  name: "shoppingcart",
  initialState,
  reducers: {
    addShoppingCart(state, action: PayloadAction<any>) {
      state.items.push(action.payload);
    },
    clearShoppingCart(state) {
      state.items = [];
    },
    getShopppingCart(state) {
      // fake
      const cart = [
        { id: 1, name: "一号路线" },
        { id: 2, name: "二号路线" },
      ];
      // state.items = action.payload;
      state.items = cart;
    },
  },
});

export const { getShopppingCart, clearShoppingCart, addShoppingCart } =
  shoppingCartSlice.actions;
