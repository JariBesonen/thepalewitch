import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Games from "./Pages/Games";
import Contact from "./Pages/Contact";
import Support from "./Pages/Support";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import SmoothScroll from "./SmoothScroll";



function App() {
  return (
    <Router>
      <Navbar />
      <SmoothScroll />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/support" element={<Support />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
