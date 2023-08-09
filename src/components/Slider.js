import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";
import SmallCard from "./SmallCard";
import { useWindowWidth } from "@react-hook/window-size";

const SwiperButtonNext = ({ children }) => {
  const swiper = useSwiper();
  return (
    <button
      className="slider-buttons__right"
      onClick={() => swiper.slideNext()}
    >
      {children}
    </button>
  );
};

const SwiperButtonPrev = ({ children }) => {
  const swiper = useSwiper();
  return (
    <button className="slider-buttons__left" onClick={() => swiper.slidePrev()}>
      {children}
    </button>
  );
};

export default function () {
  const [singles, setSingles] = useState([]);
  const swiper = useSwiper();
  const [countSlide, setCountSlide] = useState(4);
  const width = useWindowWidth();

  useEffect(() => {
    if (width < 650) {
      setCountSlide(1);
    } else if (width < 1000 && width > 650) {
      setCountSlide(2);
    } else if (width < 1300 && width > 1000) {
      setCountSlide(3);
    }
  }, [width]);

  useEffect(() => {
    axios
      .get(
        `https://646bb7447d3c1cae4ce43199.mockapi.io/Singles?orderBy=rate&page=1&limit=30`
      )
      .then((res) => {
        setSingles(res.data);
      });
  }, []);
  return (
    <div className="popular">
      <div className="container">
        <div className="popular-wrapper">
          <div className="slider-upper-wrapper">
            <h2>Popular vinyl</h2>
          </div>
          <div className="slider-wrapper">
            <Swiper
              slidesPerView={countSlide}
              spaceBetween={20}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <div className="slider-buttons">
                <SwiperButtonPrev>
                  <svg
                    className="slider-buttons__left-arrow"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.292892 8.70711C-0.0976315 8.31658 -0.0976315 7.68342 0.292892 7.29289L6.65685 0.928932C7.04738 0.538408 7.68054 0.538408 8.07107 0.928932C8.46159 1.31946 8.46159 1.95262 8.07107 2.34315L2.41421 8L8.07107 13.6569C8.46159 14.0474 8.46159 14.6805 8.07107 15.0711C7.68054 15.4616 7.04738 15.4616 6.65685 15.0711L0.292892 8.70711ZM16 9H0.999999V7H16V9Z"
                      fill="#171717"
                    />
                  </svg>
                </SwiperButtonPrev>
                <SwiperButtonNext>
                  <svg
                    className="slider-buttons__right-arrow"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.292892 8.70711C-0.0976315 8.31658 -0.0976315 7.68342 0.292892 7.29289L6.65685 0.928932C7.04738 0.538408 7.68054 0.538408 8.07107 0.928932C8.46159 1.31946 8.46159 1.95262 8.07107 2.34315L2.41421 8L8.07107 13.6569C8.46159 14.0474 8.46159 14.6805 8.07107 15.0711C7.68054 15.4616 7.04738 15.4616 6.65685 15.0711L0.292892 8.70711ZM16 9H0.999999V7H16V9Z"
                      fill="#171717"
                    />
                  </svg>
                </SwiperButtonNext>
              </div>
              {singles.map((sample) => (
                <SwiperSlide>
                  <SmallCard sample={sample} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <Link to="/catalogue" className="button button-white">
            See all
          </Link>
        </div>
      </div>
    </div>
  );
}
