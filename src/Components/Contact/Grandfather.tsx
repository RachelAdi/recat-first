import React, { useState } from "react";
import { Header } from "../Header";
import { Side_bar } from "../Side_bar";
import { Footer } from "../Footer";
import { ChildA } from "./ChildA";
import { ChildB } from "./ChildB";
import "../../style/style.css";
export function Grandfather() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  return (
    <div className="home-container">
      <Header />
      <div className="content">
        <Side_bar />
        <main className="main">
          <div className="props-drilling-container">
            <h1>Contact Page</h1> {/* הכותרת למעלה */}
            <div className="children-row">
              <div className="child">
                <ChildA increment={increment} />
              </div>
              <div className="child">
                <ChildB count={count} />
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
