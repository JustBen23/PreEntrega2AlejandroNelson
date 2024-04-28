import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { useContext } from "react";

export const CartWidget = () => {
  const { productosCarro } = useContext(CartContext);

  const totalProductos = productosCarro.reduce(
    (acu, val) => acu + val.cantidad,
    0
  );

  if (!totalProductos) return null;

  return (
    <>
      <Link to="/cart">
        <img
          className="carrito_de_compras"
          src="https://cdn.icon-icons.com/icons2/906/PNG/512/shopping-cart_icon-icons.com_69913.png"
        />
        <p className="cart_counter">{totalProductos}</p>
      </Link>
    </>
  );
};
