import React from "react";
import MainCard from "../components/card/MainCard";
import Footer from "../components/Footer";
import HeaderBlack from "../components/HeaderBlack";
import Slider from "../components/Slider";

export default function Card() {
  return (
    <div className="App">
      <HeaderBlack />
      <MainCard />
      <Slider />
      <Footer />
    </div>
  );
}
