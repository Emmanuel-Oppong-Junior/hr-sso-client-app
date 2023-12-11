import { TUser } from "../types";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

export const isAdmin = () => {
  const appToken = Cookies.get("app-token") as string;
  const decodedToken = jwtDecode(appToken) as TUser;
  if (decodedToken.role !== "ADMIN") return false;
  return true;
};
