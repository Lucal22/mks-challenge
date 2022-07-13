import { ProductItens } from "./products";

export type ReducerState = {
  cart: {
    value: boolean;
}
}

export type ReducerProducts = {
  products: {
    products: ProductItens;
  }
  }

