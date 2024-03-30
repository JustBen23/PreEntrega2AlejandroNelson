import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import data from "../data/data.json";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    
    const delay = new Promise((resuelto, fallido) => {
      setTimeout(() => {
        resuelto(data);
      }, 2000);
    })
    
    delay.then((data) => {
      if (categoryId) {
        const categoriaDelProducto = data.filter(
          (product) => product.category === categoryId
          );
          setProducts(categoriaDelProducto);
        } else {
          setProducts(data);
        }
    
      }, [categoryId]);
    })

  return (
    <div className="contenedor_producto">
      {products.map((product) => (
        <div key={product.id}>
          <div className="tarjeta_producto">
            <img src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.detail}</p>
            <Link to={`/item/${product.id}`}>
              <button>Más información</button>
            </Link>
          </div>
        </div>
      ))}
      </div>
  );
};
