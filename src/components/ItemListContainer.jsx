import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  getFirestore,
  getDocs,
  collection,
  query,
  where,
} from "firebase/firestore";

import { ItemList } from "./ItemList";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const db = getFirestore();
    let refDoc;

    if (!categoryId) {
      refDoc = collection(db, "productos");
    } else {
      refDoc = query(
        collection(db, "productos"),
        where("categoryId", "==", categoryId)
      );
    }

    getDocs(refDoc).then((snapshot) => {
      setProducts(
        snapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        })
      );
    });
  }, [categoryId]);

  return (
    <div>
      <ItemList products={products} />
    </div>
  );
};
