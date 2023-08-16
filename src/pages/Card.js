import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import MainCard from "../components/card/MainCard";
import Footer from "../components/Footer";
import HeaderBlack from "../components/HeaderBlack";
import Slider from "../components/Slider";

export default function Card() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="App">
      <HeaderBlack />
      <MainCard />
      <Slider />
      <Footer />
    </div>
  );
}
