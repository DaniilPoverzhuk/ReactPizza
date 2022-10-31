import React from "react";
import Header from "./components/Header";

import { Cart, Home } from "./Pages";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/cart" element={<Cart />} exact />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
