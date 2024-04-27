import { Link } from "react-router-dom";

export const Item = ({ product }) => {
  return (
    <div>
      <div className="tarjeta_producto">
        <img src={product.image} alt={product.title} />
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <Link to={`/item/${product.id}`}>
          <button>Más información</button>
        </Link>
      </div>
    </div>
  );
};
