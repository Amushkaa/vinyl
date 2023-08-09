import React from "react";
import About from "../components/home/About";
import Arrivals from "../components/home/Arrivals";
import Categories from "../components/home/Categories";
import Footer from "../components/Footer";
import Form from "../components/home/Form";
import Header from "../components/Header";
import Main from "../components/home/Main";
import Slider from "../components/Slider";

export default function Home() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Arrivals />
      <Categories />
      <Slider />
      <About />
      <Form />
      <Footer />
    </div>
  );
}
