import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, getDoc, doc } from "firebase/firestore";

import { ItemDetail } from "./ItemDetail";

export const ItemDetailContainer = () => {
  const [productId, setProductId] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();

    const refDoc = doc(db, "productos", id);

    getDoc(refDoc).then((snapshot) => {
      setProductId({ id: snapshot.id, ...snapshot.data() });
    });
  }, [id]);

  if (!productId) return <div>Loading...</div>;

  return (
    <>
      <ItemDetail productId={productId} />
    </>
  );
};
