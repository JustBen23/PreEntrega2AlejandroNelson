import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [productosCarro, setProductosCarro] = useState([]);

  const clear = () => setProductosCarro([]);

  const addItem = (item, cantidad) => {
    const existe = productosCarro.some((p) => p.id === item.id);

    if (existe) {
      const updateItems = productosCarro.map((p) => {
        if (p.id === item.id) {
          return {
            ...p,
            cantidad: p.cantidad + cantidad,
          };
        } else {
          return p;
        }
      });
      setProductosCarro(updateItems);
    } else {
      setProductosCarro((prev) => {
        return [...prev, { ...item, cantidad }];
      });
    }
  };

  const removeItem = (id) => {
    const elementosAEliminar = productosCarro.filter((p) => p.id !== id);
    setProductosCarro(elementosAEliminar);
  };

  return (
    <CartContext.Provider value={{ addItem, clear, productosCarro, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};
