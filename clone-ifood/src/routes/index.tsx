import { Home } from "../pages/Home";
import { Routes, Route } from "react-router-dom";

const Router = () => (
  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
);

export { Router };
