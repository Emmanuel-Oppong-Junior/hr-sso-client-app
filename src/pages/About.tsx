import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { isAdmin } from "../utils";

const About: React.FC = () => {
  const [authorized, setAuthorized] = useState(false);
  useEffect(() => {
    setAuthorized(isAdmin());
  }, []);
  return (
    <>
      <Navbar />
      {authorized ? (
        <main>
          <div className="text-center h-[90vh] flex items-center justify-center flex-col">
            <h1 className="font-extrabold text-3xl">Amalitech About</h1>
            <p className="my-7 leading-3">
              Letter wooded direct two men indeed income sister. Impression up
            </p>
            <div>
              <Link to="/">
                <button className="btn btn-primary">Home</button>
              </Link>
              <Link to="/work">
                <button className="btn btn-active mx-3">Work Now</button>
              </Link>
              <Link to="/help">
                <button className="btn btn-primary">Help</button>
              </Link>
            </div>
          </div>
        </main>
      ) : (
        <div className="flex justify-center items-center h-[80vh] text-lg font-extrabold">
          Not Authorized
        </div>
      )}
    </>
  );
};

export default About;
