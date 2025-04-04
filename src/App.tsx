import React from 'react';

// src/App.tsx
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Model from "./pages/Model";
import Measurements from "./pages/Measurements";
import Care from "./pages/Care";
import Order from "./pages/Order";
import Lookbook from "./pages/Lookbook";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-blush text-mocha">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/model/:slug" element={<Model />} />
          <Route path="/measurements" element={<Measurements />} />
          <Route path="/care" element={<Care />} />
          <Route path="/how-to-order" element={<Order />} />
          <Route path="/lookbook" element={<Lookbook />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}