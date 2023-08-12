import React from "react";
import First from "../components/about/First";
import Main from "../components/about/Main";
import People from "../components/about/People";
import Footer from "../components/Footer";
import HeaderBlack from "../components/HeaderBlack";
import Form from "../components/home/Form";

export default function About() {
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
