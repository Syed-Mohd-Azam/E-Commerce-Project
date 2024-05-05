import { createContext, useContext } from "react";

const filterInitialState = {
  productList: [],
  onlyInStock: false,
  bestSelerOnly: false,
  sortBy: null,
  ratings: null,
};

const FilterContext = createContext(filterInitialState);
// eslint-disable-next-line react/prop-types
export const FilterProvider = ({ children }) => {
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
export const useFilter = () => {
  console.log("FilterContext", FilterContext);
  const context = useContext(FilterContext);
  console.log("context", context);
  return context;
};
