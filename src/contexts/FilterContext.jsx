import { createContext, useContext, useReducer } from "react";
import { FilterReducer } from "../reducers/FilterReducer";
const filterInitialState = {
  productList: [],
  onlyInStock: false,
  bestSellerOnly: false,
  sortBy: null,
  ratings: null,
};

const FilterContext = createContext(filterInitialState);
// eslint-disable-next-line react/prop-types
export const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(FilterReducer, filterInitialState);
  function initialProductList(products) {
    dispatch({
      type: "PRODUCT_LIST",
      payload: products,
    });
  }
  function bestSeller(products) {
    return state?.bestSellerOnly
      ? products.filter((product) => product.best_seller === true)
      : products;
  }
  function onlyInStock(products) {
    return state?.onlyInStock
      ? products?.filter((product) => product?.in_stock === true)
      : products;
  }
  const value = {
    productList: state?.productList,
    initialProductList,
  };
  return (
    <>
      <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
    </>
  );
};
// eslint-disable-next-line react-refresh/only-export-components
export const useFilterContext = () => {
  const context = useContext(FilterContext);
  return context;
};
