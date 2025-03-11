import React from "react";
import Header from "./components/header/Header";
import './assets/global.css';
import Hero from "./components/hero/Hero";
import Spot from "./components/spot/Spot";
import ProductGrid from "./components/products/Productgrid";
import FeatureList from "./components/feature/FeatureList";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Spot />
      <ProductGrid />
      <FeatureList />
      <Footer />
      <main>
        {/* Här kommer resten av sidan */}
      </main>
    </div>
  );
}

export default App;

