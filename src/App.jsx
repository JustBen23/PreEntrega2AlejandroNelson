import { useState } from "react";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <ItemListContainer greetings="Bienvenidos a mi pagina Ecommerce"/>
    </>
  );
}

export default App;
