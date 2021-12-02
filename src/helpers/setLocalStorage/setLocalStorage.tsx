import { ProdInf } from "../../interfaces/product";

export const setLocalStorage = (
  product: ProdInf,
  amount: number,
  splice = false
) => {
  if (amount === 0) {
    localStorage.setItem("products", JSON.stringify([product]));
  } else if (splice) {
    const productArray: ProdInf[] = JSON.parse(
      localStorage.getItem("products") as string
    );
    const productIndex = productArray.findIndex(
      (el: ProdInf) => el.product.itemID === product.product.itemID
    );
    if (productIndex !== -1) {
      productArray.splice(productIndex, 1, product);
    }
    localStorage.setItem("products", JSON.stringify(productArray));
  } else {
    const productArray: ProdInf[] = JSON.parse(
      localStorage.getItem("products") as string
    );
    localStorage.setItem(
      "products",
      JSON.stringify([...productArray, product])
    );
  }
};
