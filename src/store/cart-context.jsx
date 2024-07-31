import { createContext, useReducer } from "react";

export const CartContext = createContext({
  items: [],
  total: '',
  addItem: () => {},
  removeItem: () => {},
});

function cartReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    const updatedCart = [...state];
    const addedItemIndex = updatedCart.findIndex(
      (item) => item.id === action.payload.id
    );
    const addedItem = updatedCart[addedItemIndex];

    if (addedItem) {
      const updatedItem = {
        ...addedItem,
        quantity: addedItem.quantity + 1,
      };
      updatedCart[addedItemIndex] = updatedItem;
      return updatedCart;
    } else {
      const chosenItem = action.payload.meals.find(
        (item) => item.id === action.payload.id
      );
      return [
        ...updatedCart,
        {
          id: action.payload.id,
          name: chosenItem.name,
          price: chosenItem.price,
          quantity: 1,
        },
      ];
    }
  }

  if (action.type === "REMOVE_ITEM") {
    const updatedCart = [...state];
    const updatedItemIndex = updatedCart.findIndex(
      (item) => item.id === action.payload
    );
    const updatedItem = { ...updatedCart[updatedItemIndex] };

    updatedItem.quantity -= 1;

    if (updatedItem.quantity <= 0) {
      updatedCart.splice(updatedItemIndex, 1);
      return [...updatedCart];
    } else {
      updatedCart[updatedItemIndex] = updatedItem;
      return [...updatedCart];
    }
  }

  return state;
}

export default function CartContextProvider({ meals, children }) {
  const [cartState, cartDispatch] = useReducer(cartReducer, []);

  function handleAddToCart(id) {
    cartDispatch({
      type: "ADD_ITEM",
      payload: { id, meals },
    });
  }

  function handleRemoveFromCart(id) {
    cartDispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });
  }

  const totalPrice = cartState.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const formattedTotal = `$${totalPrice.toFixed(2)}`;

  const ctxValue = {
    items: cartState,
    total: formattedTotal,
    addItem: handleAddToCart,
    removeItem: handleRemoveFromCart,
  };

  return (
    <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
  );
}
