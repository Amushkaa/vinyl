import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import MainPart from "../components/catalogue/MainPart";
import Upper from "../components/catalogue/Upper";
import Footer from "../components/Footer";
import HeaderBlack from "../components/HeaderBlack";

export default function Catalogue() {
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
