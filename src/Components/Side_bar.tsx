import React, { useState } from "react";
import { Home } from "./Home";
import { About } from "./About";
import { Link } from "react-router-dom";

export function Side_bar() {
  return (
    <aside className="sidebar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="../Contact/Grandfather">Contact</Link>
        </li>
      </ul>
    </aside>
  );
}
