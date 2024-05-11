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
      ? products?.filter((product) => product?.best_seller === true)
      : products;
  }
  function onlyInStock(products) {
    return state?.onlyInStock
      ? products?.filter((product) => product?.in_stock === true)
      : products;
  }
  function ratings(products) {
    if (state?.ratings === "4STARSABOVE") {
      return products?.filter((product) => product?.rating > 4);
    }
    if (state?.ratings === "3STARSABOVE") {
      return products?.filter((product) => product?.rating > 3);
    }
    if (state?.ratings === "2STARSABOVE") {
      return products?.filter((product) => product?.rating > 2);
    }
    if (state?.ratings === "1STARSABOVE") {
      return products.filter((product) => product.rating > 1);
    }
    return products;
  }
  function sortBy(products) {
    if (state?.sortBy === "lowtohigh") {
      return products.sort((a, b) => Number(a?.price) - Number(b?.price));
    }
    if (state?.sortBy === "hightolow") {
      return products.sort((a, b) => Number(b?.price) - Number(a?.price));
    }
    return products;
  }
  const filteredProducts = ratings(
    sortBy(onlyInStock(bestSeller(state?.productList)))
  );
  const value = {
    productList: filteredProducts,
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
