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
  const value = {
    productList: [1, 2, 3],
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
  console.log("context", context);
  return context;
};
