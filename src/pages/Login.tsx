import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Login: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (Cookies.get("app-token")) {
      navigate("/");
    }
  }, [navigate]);
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello Amali,</h1>
          <p className="py-6">Click on Login to access Amalitech Apps</p>
          <Link to="https://amalitech-sso.amalitech-dev.net/login">
            <button className="btn btn-primary">Login now</button>
          </Link>
          {/* <Link to="http://localhost:3000/login">
            <button className="btn btn-primary">Get Started</button>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
