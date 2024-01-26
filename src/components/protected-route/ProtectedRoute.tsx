import { Outlet, Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const ProtectedRoutes: React.FC = () => {
  return Cookies.get("app-token") ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
