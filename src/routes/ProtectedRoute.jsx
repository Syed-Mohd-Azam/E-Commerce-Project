import { Navigate } from "react-router-dom";
// eslint-disable-next-line react/prop-types
export const ProtectedRoute = ({ children }) => {
  console.log(children);
  const token = false;
  //   const token = JSON.parse(sessionStorage.getItem("token"));
  console.log(token);
  return token ? children : <Navigate to="/login" />;
};
