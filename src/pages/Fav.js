import React from "react";
import Main from "../components/favorites/Main";
import Upper from "../components/favorites/Upper";
import Footer from "../components/Footer";
import Header from "../components/HeaderBlack";

export default function Fav() {
  return (
    <div className="App">
      <Header />
      <Upper />
      <Main />
      <Footer />
    </div>
  );
}
