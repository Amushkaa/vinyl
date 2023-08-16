import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import First from "../components/about/First";
import Main from "../components/about/Main";
import People from "../components/about/People";
import Footer from "../components/Footer";
import HeaderBlack from "../components/HeaderBlack";
import Form from "../components/home/Form";

export default function About() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="App">
      <HeaderBlack />
      <First />
      <Main />
      <People />
      <Form />
      <Footer />
    </div>
  );
}
