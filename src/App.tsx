import { useEffect, useState } from "react";
import Router from "./router";
import Cookies from "js-cookie";

function App() {
  const [proceed, setProceed] = useState(false);
  const authenticate = async () => {
    console.log(window.location);
    //check if there's token
    const msToken = Cookies.get("ms-token");
    if (msToken) {
      setProceed(true);
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
      setProceed(true);
      window.location.href = "/";
      return;
    }
    setProceed(true);
  };
  useEffect(() => {
    authenticate();
  }, []);

  return proceed && <Router />;
}

export default App;
