import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Games from "./Pages/Games";
import Support from "./Pages/Support";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import SmoothScroll from "./SmoothScroll";

function App() {
  return (
    <Router>
      <Navbar />
      <SmoothScroll />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />

        <Route path="/support" element={<Support />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
