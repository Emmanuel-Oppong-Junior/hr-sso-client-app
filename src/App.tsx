import { useEffect, useState } from "react";
import Router from "./router";
import Cookies from "js-cookie";

function App() {
  const [proceed, setProceed] = useState(false);
  const authenticate = async () => {
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
    const loginHint = queryParams.get("login-hint");

    if (msAuth && appToken) {
      Cookies.set("ms-token", msAuth, { secure: true, sameSite: "none" });
      Cookies.set("app-token", appToken, { secure: true, sameSite: "none" });
      Cookies.set("login-hint", loginHint as string, { secure: true, sameSite: "none" });
      Cookies.set("ms-refresh-token", refreshToken as string, { secure: true, sameSite: "none" });
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
