import { Routes, Route } from "react-router-dom";
import {
  CartPage,
  FilteredProducts,
  HomePage,
  Login,
  ProductDetails,
  ProductsList,
  Register,
} from "../pages";
import { FilterBar } from "../pages/Products/components/FilterBar";
import { ProtectedRoute } from "./ProtectedRoute";
const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="products" element={<ProductsList />} />
        <Route path="filteredProducts" element={<FilteredProducts />} />
        <Route path="filter" element={<FilterBar />} />
        <Route path="productDetails/:id" element={<ProductDetails />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route
          path="cart"
          element={
            <ProtectedRoute>
              <CartPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
};
export default AllRoutes;
