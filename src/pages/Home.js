import React, { useEffect } from "react";
import About from "../components/home/About";
import Arrivals from "../components/home/Arrivals";
import Categories from "../components/home/Categories";
import Footer from "../components/Footer";
import Form from "../components/home/Form";
import Header from "../components/Header";
import Main from "../components/home/Main";
import Slider from "../components/Slider";
import { useLocation } from "react-router-dom";
import SliderArrivals from "../components/SliderArrivals";

export default function Home() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // const observer = new IntersectionObserver((entries) => {
  //   // перебор записей
  //   entries.forEach((entry) => {
  //     // если элемент появился
  //     if (entry.isIntersecting) {
  //       // добавить ему CSS-класс
  //       entry.target.classList.add("animation");
  //     }
  //   });
  // });
  // observer.observe(document.querySelectorAll("h2"));

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
