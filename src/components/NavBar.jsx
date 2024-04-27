import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { getFirestore, getDocs, collection } from "firebase/firestore";

import { CartWidget } from "./CartWidget";

export const NavBar = () => {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {

  const db = getFirestore();
  const refDoc = collection(db, "productos");

  getDocs(refDoc).then((snapshot) => {
    snapshot.docs.map((doc) => {
      setCategorias((prev) => [...prev, doc.get("categoryId")]);
    });
  });
  }, []);

  const listaDeCategorias = new Set(categorias);

  return (
    <>
      <nav>
        <NavLink to="/" className="logoNav">
          Nitro Store
        </NavLink>
        <NavLink to="/">
          <span>Home</span>
        </NavLink>
        {[...listaDeCategorias].map((category) => (
          <NavLink key={category} to={`/category/${category}`}>
            <span>{category}</span>
          </NavLink>
        ))}
          <CartWidget />
      </nav>
    </>
  );
};
