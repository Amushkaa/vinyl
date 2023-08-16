import React from "react";
import { Link } from "react-router-dom";
import video from "../../img/video.mp4";
import image from "../../img/order.png";
import order from "../../img/pre-order.svg";
import arrow from "../../img/Arrow.svg";

export default function Main() {
  return (
    <>
      <div className="main">
        <div className="main-video-mask">
          <div className="main-video">
            <video
              autoPlay="autoplay"
              muted="muted"
              loop="loop"
              playsInline=""
              className="video"
            >
              {" "}
              <source src={video} type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="main-container">
          <h1>Begin your vinyl adventure with us</h1>
          <Link to="/card/11" className="main-order">
            <div
              style={{ backgroundImage: `url(${image})` }}
              className="main-order-image"
            >
              <img className="main-order-image__text" src={order} alt="arrow" />
              <button className="main-order-image__button">
                <img
                  className="main-order-image__arrow"
                  src={arrow}
                  alt="arrow"
                />
              </button>
            </div>
            <div className="main-order-text">
              <div className="main-order-text__header">The Offspring</div>
              <div className="main-order-text__text">
                Rise and Fall, Rage and Grace
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
