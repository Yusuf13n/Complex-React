import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "../App";
import { Home } from "../components/Pages/Home";
import { Yusuf } from "../components/Pages/Yusuf";

export const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/Complex-React" element={<Home />} />
      </Routes>
    </div>
  );
};
