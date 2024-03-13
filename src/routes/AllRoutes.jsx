import { Routes, Route } from "react-router-dom";
import { HomePage, ProductsList } from "../pages";
import { FilterBar } from "../pages/Products/components/FilterBar";
const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsList />} />
        <Route path="/filter" element={<FilterBar />} />
      </Routes>
    </>
  );
};
export default AllRoutes;
