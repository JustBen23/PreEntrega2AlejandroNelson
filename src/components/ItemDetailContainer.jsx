import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import productos from "../data/data.json";

export const ItemDetailContainer = () => {
  const [productId, setProductId] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    setProductId(productos.find((product) => product.id == Number(id)));
  }, [id]);

  if (!productId) return <div>Loading...</div>;

  return (
    <div className="contenedor_producto_general">
      <div className="contenedor_producto_individual">
        <img src={productId.img} alt={productId.name} />
        <div className="contenedor_contenido_producto">
          <h2>Detalle del producto:</h2>
          <h2>{productId.name}</h2>
          <p>{productId.detail}</p>
        </div>
      </div>
    </div>
  );
};
