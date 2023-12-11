import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Help: React.FC = () => {
  return (
    <>
      <Navbar />
      <main>
        <div className="text-center h-[90vh] flex items-center justify-center flex-col">
          <h1 className="font-extrabold text-3xl">Amalitech Help</h1>
          <p className="my-7 leading-3">This is our Help page</p>
          <div>
            <Link to="/">
              <button className="btn btn-primary">Home</button>
            </Link>
            <Link to="/work">
              <button className="btn btn-primary mx-3">Work Now</button>
            </Link>
            <Link to="/help">
              <button className="btn  btn-active">Help</button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default Help;
