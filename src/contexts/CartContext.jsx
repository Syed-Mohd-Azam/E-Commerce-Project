import { createContext, useContext, useReducer } from "react";
import { CartReducer } from "../reducers";
const cartInitialState = {
  cartList: [],
  total: 0,
};
const CartContext = createContext(cartInitialState);
// eslint-disable-next-line react/prop-types
export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, cartInitialState);
  function addToCart(product) {
    const updatedList = state.cartList.concat(product);
    const total = Number(state.total) + Number(product.price);
    dispatch({
      type: "ADD_TO_CART",
      payload: { productsList: updatedList, total: total },
    });
  }
  function deleteFromCart(product) {
    const updatedList = state.cartList.filter((item) => item.id !== product.id);
    const total = Number(state.total) - Number(product.price);
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: { productsList: updatedList, total: total },
    });
  }
  function clearCart() {
    dispatch({
      type: "CLEAR_CART",
    });
  }
  const value = {
    cartList: state.cartList,
    total: state.total,
    addToCart,
    deleteFromCart,
    clearCart,
  };

  return (
    <>
      <CartContext.Provider value={value}>{children}</CartContext.Provider>
    </>
  );
};
// eslint-disable-next-line react-refresh/only-export-components
export const useCartContext = () => {
  const context = useContext(CartContext);
  return context;
};
