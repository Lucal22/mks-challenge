export type Products = {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
  createdAt: string;
  updatedAt: string;
};

export type FetchData = {
    type: string;
    products: Products;
}

export type ArrayProducts = {
  [0]: string,
  [1]: Products,
}

