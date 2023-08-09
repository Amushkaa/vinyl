import React from "react";
import MainPart from "../components/bag/MainPart";
import Upper from "../components/bag/Upper";
import Footer from "../components/Footer";
import HeaderBlack from "../components/HeaderBlack";

export default function Bag() {
  return (
    <div className="App">
      <HeaderBlack />
      <Upper />
      <MainPart />
      <Footer />
    </div>
  );
}
