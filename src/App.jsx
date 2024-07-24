import MealItem from "./components/MealItem";
import { fetchAvailableMeals } from "./http";
import { useFetch } from "./hooks/useFetch";

const MEALS = [
  {
    id: "m1",
    name: "Mac & Cheese",
    price: "8.99",
    description:
      "Creamy cheddar cheese mixed with perfectly cooked macaroni, topped with crispy breadcrumbs. A classic comfort food.",
    image: "images/mac-and-cheese.jpg",
  },
  {
    id: "m2",
    name: "Margherita Pizza",
    price: "12.99",
    description:
      "A classic pizza with fresh mozzarella, tomatoes, and basil on a thin and crispy crust.",
    image: "images/margherita-pizza.jpg",
  },
  {
    id: "m3",
    name: "Caesar Salad",
    price: "7.99",
    description:
      "Romaine lettuce tossed in Caesar dressing, topped with croutons and parmesan shavings.",
    image: "images/caesar-salad.jpg",
  },
];

function App() {
  const {
    isFetching,
    error,
    fetchedData: availableMeals,
  } = useFetch(fetchAvailableMeals, []);

  return (
    <>
      <div id="meals">
        {isFetching && <p>Loading data...</p>}
        {error && <p>{error.message}</p>}
        {!error && availableMeals.map((meal) => <MealItem {...meal} />)}
      </div>
    </>
  );
}

export default App;
