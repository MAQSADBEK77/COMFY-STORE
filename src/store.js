import { configureStore } from "@reduxjs/toolkit";
import cartReduser from "./features/cart/cartSlice";

export const store = configureStore({
  reducer: {
    cartState: cartReduser,
  },
});
