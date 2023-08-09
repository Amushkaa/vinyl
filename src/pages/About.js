import React from "react";
import First from "../components/about/First";
import Main from "../components/about/Main";
import Footer from "../components/Footer";
import HeaderBlack from "../components/HeaderBlack";

export default function About() {
  return (
    <div className="App">
      <HeaderBlack />
      <First />
      <Main />
      <Footer />
    </div>
  );
}
