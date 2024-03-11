import { CartWidget } from "./CartWidget";

export const NavBar = () => (
  <>
    <nav>
      <div>Nitro Store</div>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">Cart</a></li>
        <li><a href="#">About Us</a></li>
      </ul>
      <CartWidget />
    </nav>
  </>
);
