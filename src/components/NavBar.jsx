import { NavLink } from "react-router-dom";
import { CartWidget } from "./CartWidget";

import data from "../data/data.json";

const categorias = data.map((categoria) => categoria.category);

const listaDeCategorias = new Set(categorias);

export const NavBar = () => (
  <>
    <nav>
      <NavLink to="/" className="logoNav">Nitro Store</NavLink>
      <NavLink to="/"><span>Home</span></NavLink>
      {[...listaDeCategorias].map((category) => (
        <NavLink key={category} to={`/category/${category}`}>
          <span>{category}</span>
        </NavLink>
      ))}
      <CartWidget />
    </nav>
  </>
);
