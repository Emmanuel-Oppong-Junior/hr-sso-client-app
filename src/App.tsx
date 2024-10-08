import { useEffect, useState } from "react";
import Router from "./router";
import Cookies from "js-cookie";

function App() {
  const [proceed, setProceed] = useState(false);
  const authenticate = async () => {
    //check if there's token
    const msToken = Cookies.get("app-token");

    if (msToken) {
      setProceed(true);
      return;
    }

    const result = await fetchToken();

    const appToken = result.app_token;
    const refreshToken = result.ms_refresh_token;
    const loginHint = result.login_hint;
    const expiresIn = result.expires_at;
    const expirationTimeInMillis = Number(expiresIn) * 1000;
    // Create a Date object with the calculated expiration time
    const expirationDate = new Date(expirationTimeInMillis);

    const cookieOption: Cookies.CookieAttributes = {
      secure: true,
      sameSite: "None",
      expires: new Date(expirationDate),
    };

    if (appToken) {
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

  const fetchToken = async () => {
    try {
      const response = await fetch("http://localhost:3000/login-token", {
        method: "GET",
        credentials: "include",
      });
      return await response.json();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    authenticate();
  }, []);

  return proceed && <Router />;
}

export default App;
