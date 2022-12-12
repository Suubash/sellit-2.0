export interface ICategory {
  id: string;
  title: string;
  image: string;
}

export interface IProduct {
  id: string;
  title: string;
  image: string;
  price: string;
  location: { place: string; street: string };
}
