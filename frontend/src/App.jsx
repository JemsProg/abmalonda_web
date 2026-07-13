import { useState } from "react";
import Header from "./components/navigation/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/navigation/Footer";
import About from "./pages/About";
import Services from "./pages/Services";
import MobileCTA from "./components/navigation/MobileCTA";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
        </Routes>
        <Footer />
        <MobileCTA />
      </BrowserRouter>
    </>
  );
}

export default App;
