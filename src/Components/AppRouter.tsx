import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
import { Grandfather } from "./Contact/Grandfather";

export function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact/Grandfather" element={<Grandfather />} />
      </Routes>
    </Router>
  );
}
