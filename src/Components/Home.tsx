import React, { useState } from "react";
import { Header } from "./Header";
import { Main } from "./Main";
import { Side_bar } from "./Side_bar";
import { Footer } from "./Footer";
import "../style/style.css";
export function Home() {
  return (
    <div className="home-container">
      <Header />
      <div className="content">
        <Side_bar />
        <main>
          <Main />
        </main>
      </div>
      <Footer />
    </div>
  );
}
