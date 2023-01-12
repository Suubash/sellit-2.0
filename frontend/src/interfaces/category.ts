export interface ICategory {
  id: string;
  title: string;
  image: string;
}

export interface IProduct {
  id: string;
  owner_id: string;
  title: string;
  image: string;
  price: number;
  location: { place: string; street: string };
}
