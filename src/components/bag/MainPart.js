import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  addItem,
  decreaseItem,
  removeItem,
} from "../../redux/slices/bagReducer";

export default function MainPart() {
  const singles = useSelector((state) => state.bag.bag);
  const totalPrice = useSelector((state) => state.bag.realPrice);
  const totalCount = useSelector((state) => state.bag.totalCount);
  const totalDisc = useSelector((state) => state.bag.discountPrice);
  const dispatch = useDispatch();

  console.log(singles);

  if (singles.length == 0) {
    return (
      <div className="container">
        <div className="upper-wrapper">
          <div className="no-items">
            It looks like you haven't added anything to your bag yet ☹. Maybe
            you should choose something in the{" "}
            <Link to="/catalogue" className="favorites-link">
              catalogue
            </Link>
            ?
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bag">
      <div className="container">
        <div className="bag-wrapper">
          <div className="bag-wrapper-singles">
            {singles.map((sample, index) => (
              <div className="bag-line-wrapper">
                <div className="bag-line"></div>
                <div className="bag-wrapper-single">
                  <div className="bag-wrapper-image">
                    <div className="bag-image-wrapper">
                      <img src={sample.image} className="bag-image" />
                    </div>
                    <div className="bag-wrapper-text">
                      <div className="card-header">{sample.artist}</div>
                      <div className="card-text">{sample.title}</div>
                      <div className="card-price">${sample.price}</div>
                    </div>
                  </div>
                  <div className="bag-card-counter">
                    <button
                      onClick={() => {
                        if (sample.count > 1) {
                          dispatch(decreaseItem(sample));
                        } else {
                          dispatch(removeItem(sample));
                        }
                      }}
                      className="bag-card-counter__item"
                      // disabled={sample.count <= 1}
                    >
                      <svg
                        width="19"
                        height="1"
                        viewBox="0 0 19 1"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="19" height="1" fill="#1B1B1B" />
                      </svg>
                    </button>
                    <span className="bag-card-counter__figure">
                      {sample.count}
                    </span>
                    <button
                      onClick={() => dispatch(addItem(sample))}
                      className="bag-card-counter__item"
                    >
                      <svg
                        width="19"
                        height="19"
                        viewBox="0 0 19 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect y="9" width="19" height="1" fill="#1B1B1B" />
                        <rect
                          x="9"
                          y="19"
                          width="19"
                          height="1"
                          transform="rotate(-90 9 19)"
                          fill="#1B1B1B"
                        />
                      </svg>
                    </button>
                  </div>
                  <div
                    onClick={() => {
                      dispatch(removeItem(sample));
                    }}
                    className="bag-close"
                  >
                    <svg
                      width="27"
                      height="27"
                      viewBox="0 0 27 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="6.17865"
                        y="19.5879"
                        width="19"
                        height="1"
                        transform="rotate(-43.355 6.17865 19.5879)"
                        fill="#1B1B1B"
                      />
                      <rect
                        x="19.5878"
                        y="20.6803"
                        width="19"
                        height="1"
                        transform="rotate(-133.355 19.5878 20.6803)"
                        fill="#1B1B1B"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
            <div className="bag-line"></div>
          </div>
          <div className="bag-counter">
            <div className="bag-counter-wrapper">
              <div className="bag-counter-wrapper-upper">
                <div className="bag-counter-total">
                  <span className="bag-counter-total-header">Total amount</span>
                  <div className="bag-counter-total-text-wrapper">
                    <span className="bag-counter-total-text">{totalCount}</span>
                  </div>
                </div>
                <div className="bag-counter-total">
                  <span className="bag-counter-total-header">
                    Total discount
                  </span>
                  <div className="bag-counter-total-text-wrapper">
                    <span className="bag-counter-total-text">{totalPrice}</span>
                  </div>
                </div>
                <div className="bag-counter-total">
                  <div className="bag-counter-total">
                    <span className="bag-counter-total-header">
                      Total price
                    </span>
                  </div>
                  <div className="bag-counter-total-text-wrapper">
                    <span className="bag-counter-total-text">{totalPrice}</span>
                  </div>
                </div>
              </div>
              <button className="button button-black bag-button">
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
