import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Main from "../components/delivery/Main";
import Upper from "../components/delivery/Upper";
import Footer from "../components/Footer";
import Header from "../components/HeaderBlack";
import Form from "../components/home/Form";

export default function Delivery() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="App">
      <Header />
      <Upper />
      <Main />
      <Form />
      <Footer />
    </div>
  );
}
