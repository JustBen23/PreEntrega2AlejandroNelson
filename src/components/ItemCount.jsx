import { useState } from "react";

export const ItemCount = ({ onAdd, stock }) => {
  const [count, setCount] = useState(1);

  const handleIncrease = () => {
    if (stock > count) {
      setCount(count + 1);
    }
  };

  const handleDecrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAdd = () => {
    setCount(1);
    onAdd(count);
  };

  return (
    <div className="contenedor_contador">
      <mark onClick={handleDecrease}>-</mark>
      <input value={count} readOnly />
      <mark onClick={handleIncrease}>+</mark>
      <button onClick={handleAdd}>Agregar al carrito</button>
    </div>
  );
};
