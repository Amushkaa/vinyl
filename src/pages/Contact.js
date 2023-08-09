import React from "react";
import Main from "../components/contact/Main";
import Upper from "../components/contact/Upper";
import Footer from "../components/Footer";
import Header from "../components/HeaderBlack";

export default function Contact() {
  return (
    <div className="App">
      <Header />
      <Upper />
      <Main />
      <Footer />
    </div>
  );
}
