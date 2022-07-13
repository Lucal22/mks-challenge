export type ProductItens = {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
};

export type FetchData = {
    type: string;
    products: ProductItens;
}

export type CartProducts = {
  cartProducts: {
    value: ProductItens;
  }
}
