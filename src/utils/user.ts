import { TUser } from "../types";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

export const loggedInUser = (): TUser => {
  const appToken = Cookies.get("app-token") as string;
  const decodedToken = jwtDecode(appToken) as TUser;
  return decodedToken;
};
