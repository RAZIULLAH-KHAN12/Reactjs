import { configureStore } from "@reduxjs/toolkit";

import uiSlice from './ui-slice';
import cartListSlice from './cart-slice';

const store = configureStore({
    reducer: { ui: uiSlice.reducer, cart: cartListSlice.reducer}
});

export default store;