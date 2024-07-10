import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./views/Header";
import Footer from "./views/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import ServicesSection from "./pages/Services";
import GameDevelopment from "./pages/GameDevelopment";
import AppDevelopment from "./pages/AppDevelopment";
import UxServices from "./pages/UxServices";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesSection />} />
        <Route path="/GameDevelopment" element={<GameDevelopment />} />
        <Route path="/AppDevelopment" element={<AppDevelopment />} />
        <Route path="/UxServices" element={<UxServices />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
