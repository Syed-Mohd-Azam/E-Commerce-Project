import { Routes, Route } from "react-router-dom";
import {
  CartPage,
  FilteredProducts,
  HomePage,
  Login,
  ProductDetails,
  ProductsList,
  Register,
  CheckOut,
  OrderPage,
  DashboardPage,
} from "../pages";
import { FilterBar } from "../pages/Products/components/FilterBar";
import { ProtectedRoute } from "./ProtectedRoute";
import { OrderSuccess } from "../pages/Order/components/OrderSuccess";
import { OrderFailure } from "../pages/Order/components/OrderFailure";
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
        <Route path="paymentInfo" element={<CheckOut />} />
        <Route path="order-success" element={<OrderSuccess />} />
        <Route path="order-failure" element={<OrderFailure />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route
          path="cart"
          element={
            <ProtectedRoute>
              <CartPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="order-summary"
          element={
            <ProtectedRoute>
              <OrderPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
};
export default AllRoutes;
