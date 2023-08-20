import React, { useEffect, useState } from "react";
import axios from "axios";
import ArrivalCard from "../ArrivalCard";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
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

export default function Arrivals() {
  const [singles, setSingles] = useState([]);
  const [countSlide, setCountSlide] = useState(4);
  const swiper = useSwiper();
  const width = useWindowWidth();

  useEffect(() => {
    axios
      .get(
        `https://646bb7447d3c1cae4ce43199.mockapi.io/Singles?page=1&limit=20`
      )
      .then((res) => {
        setSingles(res.data);
      });
  }, []);
  const [active, setActive] = useState(0);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (width < 650) {
      setCountSlide(1);
    } else if (width < 1000 && width > 650) {
      setCountSlide(2);
      document.querySelector(".arrivals-slider-desk").style.display = "none";
      document.querySelector(".slider-buttons-desk").style.display = "none";
      document.querySelector(".arrivals-slider-mobile").style.display = "block";
    } else if (width < 1300 && width > 1000) {
      setCountSlide(3);
      document.querySelector(".arrivals-slider-desk").style.display = "block";
      document.querySelector(".slider-buttons-desk").style.display = "flex";
      document.querySelector(".arrivals-slider-mobile").style.display = "none";
    }
  }, [width]);

  function handleSliderLeft() {
    setOffset((currentOffset) => {
      const newOffset = currentOffset + 414;
      return Math.min(newOffset, 0);
    });
    setActive((currentActive) => {
      const newActive = currentActive - 1;
      return Math.max(newActive, 0);
    });
  }

  function handleSliderRight() {
    setOffset((currentOffset) => {
      const newOffset = currentOffset - 414;
      const maxOffset = -(414 * (singles.length - 3));
      return Math.max(newOffset, maxOffset);
    });
    setActive((currentActive) => {
      const newActive = currentActive + 1;
      const maxActive = singles.length - 3;
      return Math.min(newActive, maxActive);
    });
  }

  return (
    <div className="arrivals">
      <div className="container">
        <h2>new arrivals</h2>
        <div className="arrivals-wrapper">
          <div className="arrivals-wrapper-upper">
            <div className="arrivals-text">
              Take a closer look at our arrivals of the month
            </div>
            <div className="slider-buttons-arrival slider-buttons-desk">
              <button
                className="slider-buttons__left"
                onClick={handleSliderLeft}
              >
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
              </button>
              <button
                className="slider-buttons__right"
                onClick={handleSliderRight}
              >
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
              </button>
            </div>
          </div>
          <div className="arrivals-slider arrivals-slider-desk">
            <div
              className="arrivals-card"
              style={{
                transform: `translateX(${offset}px)`,
                // transition: `0.3s`,
              }}
            >
              {singles.map((sample, index) => (
                <ArrivalCard
                  sample={sample}
                  singles={singles}
                  active={active}
                  setActive={setActive}
                  index={index}
                />
              ))}
            </div>
          </div>
          <div className="arrivals-slider arrivals-slider-mobile">
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
              {singles.map((sample, index) => (
                <SwiperSlide>
                  <ArrivalCard
                    sample={sample}
                    singles={singles}
                    active={active}
                    setActive={setActive}
                    index={index}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
