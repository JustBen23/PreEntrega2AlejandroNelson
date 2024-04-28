import { useContext, useState } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { CartContext } from "../contexts/CartContext";
import { remove } from "firebase/database";

const valoresIniciales = {
  name: "",
  email: "",
};

export const Cart = () => {
  const [buyer, setbuyer] = useState(valoresIniciales);
  const { productosCarro, removeItem, clear } = useContext(CartContext);

  const handleChange = (ev) => {
    const { name, value } = ev.target;

    setbuyer((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  // const totalCompra = productosCarro.reduce(
  //   (acu, act) => acu + act.price * act.canttidad,
  //   0
  // );

  let totalCompra = productosCarro.reduce((acumulador, valor) => acumulador + valor.price * valor.cantidad , 0);

  const handleOrder = () => {
    const orden = {
      buyer,
      items: productosCarro,
      total: totalCompra,
    };

    const db = getFirestore();
    const orderCollection = collection(db, "orden");

    addDoc(orderCollection, orden).then(({ id }) => {
      if (id) {
        alert("Su orden ha sido completada! Número de orden: " + id);
      }
    });
  };

  if (totalCompra === 0) return <h1>Tu carrito se encuentra vacío</h1>;

  return (
    <div className="lista_productos_carrito">
      <h1>Resumen de tu compra</h1>
      {productosCarro.map((item) => (
        <div key={item.id} className="objeto_lista_carrito">
          <img src={item.image} alt="" />
          <h2>{item.title}</h2>
          <p>{item.cantidad}</p>
          <p>{item.price * item.cantidad}$</p>
          <div>
            <button className="eliminar" onClick={() => removeItem(item.id)}>
              Eliminar
            </button>
          </div>
        </div>
      ))}

      <div className="resumen_de_compra">
        <p>Total de tu compra: {totalCompra}$</p>
        <button className="vaciar" onClick={() => clear()}>
          Vaciar carrito
        </button>
      </div>

      <h1>Finaliza tu compra</h1>
      <form>
        <label>Nombre: </label>
        <input
          type="text"
          value={buyer.nombre}
          name="Nombre"
          onChange={handleChange}
        />
        <label>Correo electronico: </label>
        <input
          type="email"
          value={buyer.correo}
          name="Correo"
          onChange={handleChange}
        />
        <button className="comprar" type="button" onClick={handleOrder}>
          Comprar
        </button>
      </form>
    </div>
  );
};
