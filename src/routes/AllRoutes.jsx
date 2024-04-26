import { Routes, Route } from "react-router-dom";
import { HomePage, ProductDetails, ProductsList } from "../pages";
import { FilterBar } from "../pages/Products/components/FilterBar";
const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsList />} />
        <Route path="/filter" element={<FilterBar />} />
        <Route path="/productDetails/:id" element={<ProductDetails />} />
      </Routes>
    </>
  );
};
export default AllRoutes;
