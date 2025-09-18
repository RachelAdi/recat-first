import React, { useState } from "react";
export function Side_bar() {
  return (
    <aside className="sidebar">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
      </ul>
    </aside>
  );
}
