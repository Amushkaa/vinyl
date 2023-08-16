import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Main from "../components/contact/Main";
import Upper from "../components/contact/Upper";
import Footer from "../components/Footer";
import Header from "../components/HeaderBlack";

export default function Contact() {
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
