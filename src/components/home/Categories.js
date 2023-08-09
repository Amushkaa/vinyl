import React, { useRef } from "react";
import arrow from "../../img/Arrow.svg";
import { Link, useNavigate } from "react-router-dom";
import indie from "../../img/indie.jpg";
import blues from "../../img/blues.jpg";
import blues_1 from "../../img/blues-1.jpg";
import classic from "../../img/classic.jpg";
import classic_1 from "../../img/classic-1.jpeg";
import collections from "../../img/collections.jpg";
import collections_1 from "../../img/collections-1.jpg";
import country from "../../img/country.jpg";
import country_1 from "../../img/country-1.jpg";
import electronic from "../../img/electronic.jpg";
import electronic_1 from "../../img/electronic-1.png";
import folk from "../../img/folk.jpg";
import folk_1 from "../../img/folk-1.jpg";
import jazz from "../../img/jazz.jpg";
import jazz_1 from "../../img/jazz-1.jpg";
import alternative from "../../img/alternative.jpg";
import { useDispatch } from "react-redux";
import { setGenre } from "../../redux/slices/genreReducer";

export default function Categories() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function handleGenre(event) {
    dispatch(setGenre(event.target.closest(".category").id));
    navigate("/catalogue");
  }

  return (
    <div className="categories">
      <div className="container">
        <h2>Popular categories</h2>
        <div className="categories-wrapper">
          <div className="category-line"></div>
          <div
            onClick={handleGenre}
            id="Alternative and Indie"
            className="category category-indie"
          >
            <div className="category-number">1</div>
            <div className="category-wrapper">
              <div className="category-name">Alternative and Indie</div>
              <div className="category-button">
                <img
                  className="category-button__arrow"
                  src={arrow}
                  alt="arrow"
                />
              </div>
              <img src={indie} className="category-img__indie" />
              <img src={alternative} className="category-img__alternative" />
            </div>
          </div>
          <div className="category-line"></div>
          <div
            onClick={handleGenre}
            id="Blues"
            className="category category-blues"
          >
            <div className="category-number">2</div>
            <div className="category-wrapper">
              <div className="category-name">Blues</div>
              <Link to="" className="category-button">
                <img
                  className="category-button__arrow"
                  src={arrow}
                  alt="arrow"
                />
              </Link>
              <img src={blues} className="category-img__blues" />
              <img src={blues_1} className="category-img__blues-second" />
            </div>
          </div>
          <div className="category-line"></div>
          <div
            onClick={handleGenre}
            id="Classic"
            className="category category-classic"
          >
            <div className="category-number">3</div>
            <div className="category-wrapper">
              <div className="category-name">Classic</div>
              <Link to="" className="category-button">
                <img
                  className="category-button__arrow"
                  src={arrow}
                  alt="arrow"
                />
              </Link>
              <img src={classic} className="category-img__classic" />
              <img src={classic_1} className="category-img__classic-second" />
            </div>
          </div>
          <div className="category-line"></div>
          <div
            onClick={handleGenre}
            id="Collections"
            className="category category-collections"
          >
            <div className="category-number">4</div>
            <div className="category-wrapper">
              <div className="category-name">Collections</div>
              <Link to="" className="category-button">
                <img
                  className="category-button__arrow"
                  src={arrow}
                  alt="arrow"
                />
              </Link>
              <img src={collections} className="category-img__collections" />
              <img
                src={collections_1}
                className="category-img__collections-second"
              />
            </div>
          </div>
          <div className="category-line"></div>
          <div
            onClick={handleGenre}
            id="Country"
            className="category category-country"
          >
            <div className="category-number">5</div>
            <div className="category-wrapper">
              <div className="category-name">Country</div>
              <Link to="" className="category-button">
                <img
                  className="category-button__arrow"
                  src={arrow}
                  alt="arrow"
                />
              </Link>
              <img src={country} className="category-img__country" />
              <img src={country_1} className="category-img__country-second" />
            </div>
          </div>
          <div className="category-line"></div>
          <div
            onClick={handleGenre}
            id="Electronic"
            className="category category-electronic"
          >
            <div className="category-number">6</div>
            <div className="category-wrapper">
              <div className="category-name">Electronic</div>
              <Link to="" className="category-button">
                <img
                  className="category-button__arrow"
                  src={arrow}
                  alt="arrow"
                />
              </Link>
              <img src={electronic} className="category-img__electronic" />
              <img
                src={electronic_1}
                className="category-img__electronic-second"
              />
            </div>
          </div>
          <div className="category-line"></div>
          <div
            onClick={handleGenre}
            id="Folk"
            className="category category-folk"
          >
            <div className="category-number">7</div>
            <div className="category-wrapper">
              <div className="category-name">Folk</div>
              <Link to="" className="category-button">
                <img
                  className="category-button__arrow"
                  src={arrow}
                  alt="arrow"
                />
              </Link>
              <img src={folk} className="category-img__folk" />
              <img src={folk_1} className="category-img__folk-second" />
            </div>
          </div>
          <div className="category-line"></div>
          <div
            onClick={handleGenre}
            id="Jazz"
            className="category category-jazz"
          >
            <div className="category-number">8</div>
            <div className="category-wrapper">
              <div className="category-name">Jazz</div>
              <Link to="" className="category-button">
                <img
                  className="category-button__arrow"
                  src={arrow}
                  alt="arrow"
                />
              </Link>
              <img src={jazz} className="category-img__jazz" />
              <img src={jazz_1} className="category-img__jazz-second" />
            </div>
          </div>
          <div className="category-line"></div>
        </div>
      </div>
    </div>
  );
}
