import React from "react";
import Main from "../components/delivery/Main";
import Upper from "../components/delivery/Upper";
import Footer from "../components/Footer";
import Header from "../components/HeaderBlack";
import Form from "../components/home/Form";

export default function Delivery() {
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
