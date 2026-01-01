import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Games from "./Pages/Games";
import Support from "./Pages/Support";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Community from "./Pages/Community";
import ToggleNav from "./Components/ToggleNav";
import SmoothScroll from "./SmoothScroll";
import Reply from "./Pages/Reply";

function App() {
  const [isNavOpen, setNavOpen] = useState(window.innerWidth > 600);

  useEffect(() => {
    const syncNavWithScreen = () => {
      // desktop: open, mobile: closed
      setNavOpen(window.innerWidth > 600);
    };

    syncNavWithScreen(); // run once on load
    window.addEventListener("resize", syncNavWithScreen);

    return () => window.removeEventListener("resize", syncNavWithScreen);
  }, []);

  const handleCloseNav = () => {
    // only close on mobile
    if (window.innerWidth <= 600) setNavOpen(false);
  };

  const handleToggleNav = () => {
    // only toggle on mobile (desktop stays open always)
    if (window.innerWidth <= 600) setNavOpen((prev) => !prev);
  };

  return (
    <Router>
      <SmoothScroll />

      {isNavOpen && <Navbar handleCloseNav={handleCloseNav} />}
      <ToggleNav handleToggleNav={handleToggleNav} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/community" element={<Community />} />
        <Route path="/support" element={<Support />} />
        <Route path="/reply/:id" element={<Reply />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
