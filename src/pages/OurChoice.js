import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Main from "../components/choice/Main";
import Upper from "../components/choice/Upper";
import Footer from "../components/Footer";
import Header from "../components/HeaderBlack";

export default function OurChoice() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="App">
      <Header />
      <Upper />
      <Main />
      <Footer />
    </div>
  );
}
