import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";

export default function Card() {
  const [singles, setSingles] = useState([]);
  useEffect(() => {
    axios
      .get(`https://646bb7447d3c1cae4ce43199.mockapi.io/Singles`)
      .then((res) => {
        setSingles(res.data);
      });
  }, []);
  return (
    <Swiper
      spaceBetween={23}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {singles.map((sample) => (
        <SwiperSlide>
          <Link to={`/card/${sample.id}`} className="card">
            <div className="card-image-wrapper">
              <img src={sample.image} className="card-image__arrivals"></img>
              <div className="card-favorite">
                <svg
                  className="card-favorite__heart"
                  width="22"
                  height="20"
                  viewBox="0 0 20 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.86539 8.89006L2.84345 8.8689L2.81909 8.85056C1.81376 8.09358 1.16666 6.89584 1.16666 5.54624C1.16666 3.26697 3.01697 1.41666 5.29625 1.41666C6.64546 1.41666 7.8474 2.06837 8.59978 3.07304L9 3.60745L9.40021 3.07304C10.1526 2.06837 11.3545 1.41666 12.7037 1.41666C14.983 1.41666 16.8333 3.26697 16.8333 5.54624C16.8333 6.89584 16.1862 8.09358 15.1809 8.85056L15.1565 8.8689L15.1346 8.89006L9 14.8054L2.86539 8.89006Z"
                    fill="none"
                    stroke="#171717"
                  />
                </svg>
              </div>
            </div>
            <div className="card-header">{sample.artist}</div>
            <div className="card-text">{sample.title}</div>
            <div className="card-price">${sample.price}</div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
    // <>
    //     {singles.map((sample)=>(
    // <div className='card'>
    // <div className='card-image'></div>
    // <div className='card-header'>{sample.title}</div>
    // <div className='card-text'>{sample.description}</div>
    // <div className='card-price'>{sample.price}</div>
    // </div>
    //     ))}
    //     </>
  );
}
