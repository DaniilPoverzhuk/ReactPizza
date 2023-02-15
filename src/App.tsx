import React from "react";
import Header from "./components/Header";
import Cart from "./Pages/Cart";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
