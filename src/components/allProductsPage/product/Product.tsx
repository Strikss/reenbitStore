import { onSnapshot, collection } from "@firebase/firestore";
import { useEffect } from "react";
import db from "../../../firebase";

const Product = () => {
  useEffect(() => {
    const unsub = onSnapshot(collection(db, "momos_nv"), (snapshot) => {
      snapshot.docs.map((doc) => doc.data());
    });
    return unsub;
  }, []);
  return <div>helllooo</div>;
};

export default Product;
