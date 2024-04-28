import { Routes, Route } from "react-router-dom";
import {
  FilteredProducts,
  HomePage,
  ProductDetails,
  ProductsList,
} from "../pages";
import { FilterBar } from "../pages/Products/components/FilterBar";
const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsList />} />
        <Route path="/filteredProducts" element={<FilteredProducts />} />
        <Route path="/filter" element={<FilterBar />} />
        <Route path="/productDetails/:id" element={<ProductDetails />} />
      </Routes>
    </>
  );
};
export default AllRoutes;
