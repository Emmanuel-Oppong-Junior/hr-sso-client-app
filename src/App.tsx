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
    const expiresIn = queryParams.get("expires-at");

    const expirationTimeInMillis = Number(expiresIn) * 1000;

    // Create a Date object with the calculated expiration time
    const expirationDate = new Date(expirationTimeInMillis);

    const cookieOption: Cookies.CookieAttributes = {
      secure: true,
      sameSite: "none",
      expires: new Date(expirationDate),
    };
    if (msAuth && appToken) {
      Cookies.set("ms-token", msAuth, cookieOption);
      Cookies.set("app-token", appToken, cookieOption);
      Cookies.set("login-hint", loginHint as string, { expires: 1 });
      Cookies.set("ms-refresh-token", refreshToken as string, cookieOption);
      Cookies.set("expires", expiresIn as string, cookieOption);
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
