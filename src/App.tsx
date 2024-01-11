import { useEffect, useState } from "react";
import Router from "./router";
import Cookies from "js-cookie";

function App() {
  //check user login
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const authenticate = async () => {
    //check if there's token
    const msToken = Cookies.get("ms-token");
    if (msToken) {
      setIsAuthenticated(true);
      return;
    }
    const queryParams = new URLSearchParams(window.location.search);
    const msAuth = queryParams.get("ms-token");
    const appToken = queryParams.get("app-token");
    const refreshToken = queryParams.get("ms-refresh-token");
    if (msAuth && appToken) {
      Cookies.set("ms-token", msAuth);
      Cookies.set("app-token", appToken);
      Cookies.set("ms-refresh-token", refreshToken as string);
      window.location.href = "/";
      return;
    }
    window.location.href = "https://amalitech-sso.amalitech-dev.net/login";
    // window.location.href = "http://localhost:3000/login";
    //request token
  };
  useEffect(() => {
    authenticate();
  }, []);

  return isAuthenticated && <Router />;
}

export default App;
