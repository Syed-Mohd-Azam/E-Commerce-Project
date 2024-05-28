import { createContext, useContext } from "react";
const cartInitialState = {
  cartList: [],
  total: 0,
};
const CartContext = createContext(cartInitialState);
// eslint-disable-next-line react/prop-types
export const CartContextProvider = ({ children }) => {
  console.log(CartContext);
  const value = {
    cartList: [],
    total: 0,
  };
  return (
    <>
      <CartContext.Provider value={value}>{children}</CartContext.Provider>
    </>
  );
};
// eslint-disable-next-line react-refresh/only-export-components
export const useCartContext = () => {
  const context = useContext();
  console.log(context);
  return context;
};
