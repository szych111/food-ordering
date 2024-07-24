export default function MealItem({ id, image, description, price, name }) {
  return (
    <div key={id} className="meal-item">
      <article>
        <img src={`http://localhost:3000/${image}`} alt={name} />
        <h3>{name}</h3>
        <div className="meal-item-price">{price}</div>
        <div className="meal-item-description">{description}</div>
        <div className="meal-item-actions">
          <button className="button">Add to Cart</button>
        </div>
      </article>
    </div>
  );
}
