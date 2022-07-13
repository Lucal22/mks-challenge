import { createSlice } from "@reduxjs/toolkit";

export const cartProductsSlice = createSlice({
  name: 'cartProducts',
  initialState: {value: []},
  reducers: {
    cartProducts(state, action){
      state.value = action.payload;
    },
  }
});
export const {cartProducts} = cartProductsSlice.actions;
export default cartProductsSlice.reducer;


