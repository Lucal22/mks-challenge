import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: 'cartOpen',
  initialState: {value: false},
  reducers: {
    openCart: (state, action) => {
      state.value = action.payload;
    },
  }
});

export const {openCart} = cartSlice.actions;
export default cartSlice.reducer;


