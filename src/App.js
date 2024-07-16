import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./views/Header";
import Footer from "./views/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import ServicesSection from "./pages/Services";
import GameDevelopment from "./pages/GameDevelopment";
import AppDevelopment from "./pages/AppDevelopment";
import UxServices from "./pages/UxServices";
import Careers from "./pages/Careers";
import CloudServices from "./pages/CloudServices";
import GameBrandingMarket from "./pages/GameBrandingMarket";
import GameDesgin from "./pages/GameDesgin";


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
        <Route path="/CloudServices" element={<CloudServices />} />
        <Route path="/GameBrandingMarket" element={<GameBrandingMarket />} />
      
         <Route path="/GameDesgin" element={<GameDesgin />} />

        <Route path="/Careers" element={<Careers />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
