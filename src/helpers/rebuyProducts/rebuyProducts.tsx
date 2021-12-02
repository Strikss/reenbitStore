import { ProdInf } from "../../interfaces/product";

export const rebuyProducts = (
  buyProduct: (arg1: ProdInf) => void,
  amount: number
) => {
  if (amount === 0) {
    const value: ProdInf[] = JSON.parse(
      localStorage.getItem("products") as string
    );
    if (value !== null) {
      value.forEach((el) => buyProduct(el));
    }
  }
};
