import { createSelector } from "reselect";

export const selectCartItems = (state) => state.cart.cartItems;

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((total, item) => total + item.quantity * item.price, 0)
);
