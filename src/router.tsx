import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Help from "./pages/Help";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<About />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
