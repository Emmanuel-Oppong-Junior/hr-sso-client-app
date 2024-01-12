import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
const Home: React.FC = () => {
  //check user login

  const authenticate = () => {
    //check if there's token
    console.log(window.location);
    const msToken = Cookies.get("ms-token");
    if (msToken) {
      return;
    }

    const queryParams = new URLSearchParams(window.location.search);
    const msAuth = queryParams.get("ms-token");
    const appToken = queryParams.get("app-token");
    const refreshToken = queryParams.get("ms-refresh-token");

    if (msAuth && appToken) {
      Cookies.set("ms-token", msAuth, { sameSite: "none", secure: true });
      Cookies.set("app-token", appToken);
      Cookies.set("ms-refresh-token", refreshToken as string);
      window.location.href = "/";
      return;
    }
  };

  useEffect(() => {
    authenticate();
  }, []);
  return (
    <>
      <Navbar />
      <main>
        <div className="text-center h-[90vh] flex items-center justify-center flex-col">
          <div>
            <img
              className="w-[400px] rounded-md mb-10"
              src="https://plus.unsplash.com/premium_photo-1681492124890-9c9fd18ca049?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <h1 className="font-extrabold text-3xl mb-10">Welcome Amalitech HR</h1>
          <div>
            <Link to="/">
              <button className="btn btn-active">Home</button>
            </Link>
            <Link to="/work">
              <button className="btn btn-primary mx-3">Work Now</button>
            </Link>
            <Link to="/help">
              <button className="btn btn-primary">Help</button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
