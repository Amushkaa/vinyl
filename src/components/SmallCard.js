import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  dislikeItem,
  likeItem,
  selectCurrentLike,
} from "../redux/slices/favoriteReducer";

export default function SmallCard({ sample }) {
  const navigate = useNavigate();
  const currentLike = useSelector(selectCurrentLike(sample.id));
  const dispatch = useDispatch();

  return (
    <div onClick={() => navigate(`/card/${sample.id}`)} className="card">
      <div className="card-image-wrapper card-image-wrapper-popular">
        <img src={sample.image} className="card-image" />
        {currentLike ? (
          <div
            onClick={(event) => {
              event.stopPropagation();
              dispatch(dislikeItem(sample));
            }}
            className="card-favorite"
          >
            <svg
              className="card-favorite__heart"
              style={{ opacity: "100%" }}
              width="22"
              height="20"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.86539 8.89006L2.84345 8.8689L2.81909 8.85056C1.81376 8.09358 1.16666 6.89584 1.16666 5.54624C1.16666 3.26697 3.01697 1.41666 5.29625 1.41666C6.64546 1.41666 7.8474 2.06837 8.59978 3.07304L9 3.60745L9.40021 3.07304C10.1526 2.06837 11.3545 1.41666 12.7037 1.41666C14.983 1.41666 16.8333 3.26697 16.8333 5.54624C16.8333 6.89584 16.1862 8.09358 15.1809 8.85056L15.1565 8.8689L15.1346 8.89006L9 14.8054L2.86539 8.89006Z"
                fill="#F30000"
                stroke="#F30000"
              />
            </svg>
          </div>
        ) : (
          <div
            onClick={(event) => {
              event.stopPropagation();
              dispatch(likeItem(sample));
            }}
            className="card-favorite"
          >
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
        )}
      </div>
      <div className="card-header">{sample.artist}</div>
      <div className="card-text">{sample.title}</div>
      <div className="card-price">${sample.price}</div>
    </div>
  );
}
