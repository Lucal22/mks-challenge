import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: 'products',
  initialState: {
},
  reducers: {
    getProducts() {},
    setProducts(state, action) {
      const productsData = action.payload;
      return {...state, ...productsData}
    }
  }
});

export const {getProducts, setProducts} = productSlice.actions;
export default productSlice.reducer;
