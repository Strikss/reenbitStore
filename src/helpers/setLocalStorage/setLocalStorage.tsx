import { ProdInf } from "../../interfaces/product";

export const setLocalStorage = (product: ProdInf, amount: number) => {
  if (amount === 0) localStorage.setItem("products", JSON.stringify([product]));
  else {
    const productArray: ProdInf[] = JSON.parse(
      localStorage.getItem("products") as string
    );
    localStorage.setItem(
      "products",
      JSON.stringify([...productArray, product])
    );
  }
};
