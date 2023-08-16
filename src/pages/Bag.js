import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import MainPart from "../components/bag/MainPart";
import Upper from "../components/bag/Upper";
import Footer from "../components/Footer";
import HeaderBlack from "../components/HeaderBlack";

export default function Bag() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="App">
      <HeaderBlack />
      <Upper />
      <MainPart />
      <Footer />
    </div>
  );
}
