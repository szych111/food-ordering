import { useContext } from "react";

import { CartContext } from "../store/cart-context";

export default function Cart({ onAction, onClose }) {
  const { items, total, addItem, removeItem } = useContext(CartContext);

  return (
    <div className="cart">
      <h2>Your cart</h2>
      <ul>
        {items.length === 0 && <p>No items in cart!</p>}
        {items.length > 0 &&
          items.map((item) => {
            return (
              <li key={item.id} className="cart-item">
                <p>
                  {item.name} - 1 x {item.price}
                </p>
                <div className="cart-item-actions">
                  <button onClick={() => removeItem(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => addItem(item.id)}>+</button>
                </div>
              </li>
            );
          })}
      </ul>
      <div className="cart-total">{total}</div>
      <div className="modal-actions">
        <button className="text-button" onClick={onClose}>
          Close
        </button>
        <button className="button" onClick={onAction}>
          Go to checkout
        </button>
      </div>
    </div>
  );
}
