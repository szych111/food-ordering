import { useContext } from "react";

import { CartContext } from "../store/cart-context";

export default function MealItem({
  id,
  image,
  description,
  price,
  name,
}) {
  const { addItem } = useContext(CartContext);
  return (
    <div key={id} className="meal-item">
      <article>
        <img src={`http://localhost:3000/${image}`} alt={name} />
        <h3>{name}</h3>
        <div className="meal-item-price">{price}</div>
        <div className="meal-item-description">{description}</div>
        <div className="meal-item-actions">
          <button className="button" onClick={() => addItem(id)}>
            Add to Cart
          </button>
        </div>
      </article>
    </div>
  );
}
