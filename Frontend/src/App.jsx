import React, { useState } from "react";
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

function App() {
  const [isNavOpen, setNavOpen] = useState(false);

  const handleToggleNav = () => {
    setNavOpen((prev) => !prev);
  };

  const handleCloseNav = () => {
    setNavOpen(false);
  };

  return (
    <Router>
      <SmoothScroll />
      {isNavOpen ? (
        <>
          <Navbar handleCloseNav={handleCloseNav} />
          <ToggleNav handleToggleNav={handleToggleNav} />
        </>
      ) : (
        <ToggleNav handleToggleNav={handleToggleNav} />
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/community" element={<Community />} />

        <Route path="/support" element={<Support />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
