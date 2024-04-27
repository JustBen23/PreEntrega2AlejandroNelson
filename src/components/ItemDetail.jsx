import { useContext } from "react";

import { ItemCount } from "./ItemCount";
import { CartContext } from "../contexts/CartContext";

export const ItemDetail = ({ productId }) => {
  const { addItem } = useContext(CartContext);

  const add = (cantidad) => {
    addItem(productId, cantidad);
  };

  return (
    <div className="contenedor_producto_general">
      <div className="contenedor_producto_individual">
        <img src={productId?.image} alt={productId.title} />
        <div className="contenedor_contenido_producto">
          <h2>Detalle del producto:</h2>
          <h2>{productId?.title}</h2>
          <p>{productId?.description}</p>
          <ItemCount onAdd={add} stock={productId?.stock}/>
        </div>
      </div>
    </div>
  );
};
