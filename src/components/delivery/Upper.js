import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import image from "../../img/image-57.png";

export default function Upper() {
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.pageYOffset / 2);
    });
  }, [scroll]);

  return (
    <div className="container">
      <div className="bread">
        <Link to="/" className="bread-item">
          Home{" "}
        </Link>
        <Link to="/choice" className="bread-item">
          / Delivery
        </Link>
      </div>
      <div className="delivery">
        <img
          src={image}
          className="delivery-image"
          style={{ transform: `rotate(${scroll}deg)` }}
        />
        <div className="delivery-upper-wrapper">
          <h1 className="delivery-upper-h">We stock the&nbsp;best vinyl</h1>
          <p className="delivery-upper-text">
            The majority of the titles we stock have been mastered from the
            original analogue tapes with the emphasis above all else on sound
            quality
          </p>
        </div>
      </div>
    </div>
  );
}
