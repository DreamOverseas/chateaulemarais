import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Events from "./pages/Events";
import GuestInformation from "./pages/GuestInformation";
import Location from "./pages/Location";
import Wildlife from "./pages/Wildlife";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/guest-information" element={<GuestInformation />} />
          <Route path="/location" element={<Location />} />
          <Route path="/wildlife" element={<Wildlife />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;