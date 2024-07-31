import { useContext } from "react";

import { CartContext } from "../store/cart-context";

export default function Header({ onCartOpen }) {
  const { items } = useContext(CartContext);

  return (
    <div className="main-header">
      <div className="title">
        <img src="./logo.jpg" alt="" />
        <h1>MacMax</h1>
      </div>
      <button className="text-button" onClick={onCartOpen}>
        Cart ({items.length})
      </button>
    </div>
  );
}
