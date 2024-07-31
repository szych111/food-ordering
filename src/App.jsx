import { useState } from "react";
import MealItem from "./components/MealItem";
import Modal from "./components/Modal";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import CartContextProvider from "./store/cart-context";
import Header from "./components/Header";
import { fetchAvailableMeals } from "./http";
import { useFetch } from "./hooks/useFetch";

function App() {
  const [cartModalOpen, setCartModalOpen] = useState(false);
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
  const {
    isFetching,
    error,
    fetchedData: availableMeals,
  } = useFetch(fetchAvailableMeals, []);

  function handleOpenCartModal() {
    setCartModalOpen(true);
  }

  function handleCloseCartModal() {
    setCartModalOpen(false);
  }

  function handleOpenCheckoutModal() {
    setCartModalOpen(false);
    setCheckoutModalOpen(true);
  }

  function handleCloseCheckoutModal() {
    setCheckoutModalOpen(false);
  }

  function handleOrderSubmit(order) {
    console.log(order);
    setCheckoutModalOpen(false);
  }

  return (
    <CartContextProvider meals={availableMeals}>
      <Modal
        open={cartModalOpen}
        onClose={handleCloseCartModal}
        onAction={handleOpenCheckoutModal}
        actionText="Go to Checkout"
      >
        <Cart />
      </Modal>
      <Modal
        open={checkoutModalOpen}
        onClose={handleCloseCheckoutModal}
        onAction={handleOrderSubmit}
        actionText="Submit Order"
      >
        <Checkout />
      </Modal>
      <Header onCartOpen={handleOpenCartModal} />
      <div id="meals">
        {isFetching && <p>Loading data...</p>}
        {error && <p>{error.message}</p>}
        {!error &&
          availableMeals.map((meal) => <MealItem key={meal.id} {...meal} />)}
      </div>
    </CartContextProvider>
  );
}

export default App;
