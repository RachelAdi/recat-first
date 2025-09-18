import React, { useState } from "react";
import { Header } from "./Header";
import { Side_bar } from "./Side_bar";
import { Footer } from "./Footer";
import "../style/style.css";
export function About() {
  return (
    <div className="home-container">
      <Header />
      <div className="content">
        <Side_bar />
        <main className="main">
          <div className="about">
            <h1>About Our Candy Shop</h1>
            <p>
              Welcome to Sweet Paradise! 🍭 We offer a wide variety of candies,
              chocolates, and sweets from all over the world.
            </p>
            <p>
              Our mission is to make your day sweeter. We carefully select the
              finest ingredients to create delightful treats for everyone.
            </p>
            <p>Visit us often to discover new flavors and seasonal specials.</p>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
