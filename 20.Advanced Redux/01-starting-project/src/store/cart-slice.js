import { createSlice } from "@reduxjs/toolkit";

const initialItemsState = { items: [], totalQuantity: 0, changed: false };

const cartListSlice = createSlice({
  name: "cart-slice",
  initialState: initialItemsState,
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    addItemToCart(state, action) {
      const newItem = action.payload; //i expect payload is an object
      const existingItem = state.items.find((item) => item.id === newItem.id);
      // console.log("existingItem", existingItem);
      state.totalQuantity++;
      state.changed = true;
      if (!existingItem) {
        //if item does not exist
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        //if item exist
        existingItem.quantity += 1;
        existingItem.totalPrice += newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      state.changed = true;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id); // here overwrite the array
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }
    },
  },
});

export const cartActions = cartListSlice.actions;
export default cartListSlice;
