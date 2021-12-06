export interface ProductsType {
  itemID: string;
  name: string;
  priceHalf: number;
  priceFull: number;
  freshness: string;
  delivery: string;
  stock: number;
  category: string;
  farm: string;
  description: string;
  rating: number;
  image: string;
  country: string;
  deliverIn: number;
  color: string;
  questions: number;
  reviews: number;
  buyBy: ProdInf["type"][];
}
export interface ProdInf {
  product: ProductsType;
  amount: number;
  type: "Pcs" | "Kgs" | "Box" | "Pack";
}

export interface Profile {
  email: string;
  name: string;
  imageUrl: string;
}
