import React from "react";
import Home from "./pages/Home";
import Catalogue from "./pages/Catalogue";
import { Route, Routes } from "react-router-dom";
import Card from "./pages/Card";
import OurChoice from "./pages/OurChoice";
import Contact from "./pages/Contact";
import Delivery from "./pages/Delivery";
import Fav from "./pages/Fav";
import Bag from "./pages/Bag";
import About from "./pages/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catalogue" element={<Catalogue />} />
      <Route path="/card/:id" element={<Card />} />
      <Route path="/choice" element={<OurChoice />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/delivery" element={<Delivery />} />
      <Route path="/fav" element={<Fav />} />
      <Route path="/bag" element={<Bag />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
