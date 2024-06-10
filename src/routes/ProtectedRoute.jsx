import { Navigate } from "react-router-dom";
import { getTokenDetails } from "../services";
// eslint-disable-next-line react/prop-types
export const ProtectedRoute = ({ children }) => {
  const { token } = getTokenDetails();
  //   const token = JSON.parse(sessionStorage.getItem("token"));
  return token ? children : <Navigate to="/login" />;
};
