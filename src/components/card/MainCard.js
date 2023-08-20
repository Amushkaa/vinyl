import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  dislikeItem,
  likeItem,
  selectCurrentLike,
} from "../../redux/slices/favoriteReducer";
import { addItem } from "../../redux/slices/bagReducer";

export default function MainCard() {
  const { id } = useParams();
  const [card, setCard] = useState({});
  const tracks = card.tracks;
  const currentLike = useSelector(selectCurrentLike(card.id));
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`https://646bb7447d3c1cae4ce43199.mockapi.io/Singles/${id}`)
      .then((res) => {
        setCard(res.data);
      });
  }, [id]);

  return (
    <>
      <div className="upper">
        <div className="container">
          <div className="bread">
            <Link to="/" className="bread-item">
              Home{" "}
            </Link>
            <Link to="/catalogue" className="bread-item">
              / Catalogue{" "}
            </Link>
            <Link to="javascript:void(0)" className="bread-item">
              / {card.artist} - {card.title}
            </Link>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="main-card">
          <div className="main-card-image-wrapper">
            <img src={card.image2} className="main-card-image" />
          </div>
          <div className="main-card-wrapper">
            <div className="main-card-header-wrapper">
              <div className="main-card-art">art: {card.id}</div>
              <div className="main-card-header">
                {card.artist} - {card.title}
              </div>
              <div className="main-card-price">${card.price}</div>
            </div>
            <div className="main-card-buttons">
              <button
                onClick={() => {
                  dispatch(addItem(card));
                }}
                className="button button-black main-card-buttons-bag"
              >
                Add to bag
              </button>
              {currentLike ? (
                <button
                  onClick={(event) => {
                    event.stopPropagation();
                    dispatch(dislikeItem(card));
                  }}
                  className="button button-white main-card-buttons-wishlist"
                >
                  <svg
                    className="card-favorite__heart"
                    style={{ opacity: "100%", margin: "0 10px 0 0" }}
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
                  </svg>{" "}
                  Remove from favorites
                </button>
              ) : (
                <button
                  onClick={(event) => {
                    event.stopPropagation();
                    dispatch(likeItem(card));
                  }}
                  className="button button-white main-card-buttons-wishlist"
                >
                  Add to favorites
                </button>
              )}
            </div>
            <div className="main-card-description">{card.description}</div>
            <div className="main-card-tracklist-wrapper">
              <div className="main-card-tracklist-header">Track Listing</div>
              <div className="main-card-tracklist-list-wrapper">
                {tracks?.["Side A"] && (
                  <div className="main-card-tracklist">
                    <div className="main-card-tracklist-list-header">
                      Side A
                    </div>
                    <ol className="main-card-tracklist-list">
                      {tracks?.["Side A"].map((track) => (
                        <li className="main-card-tracklist-list__item">
                          {track}
                        </li>
                      ))}
                    </ol>
                  </div>
                )}
                {tracks?.["Side B"] && (
                  <div className="main-card-tracklist">
                    <div className="main-card-tracklist-list-header">
                      Side B
                    </div>
                    <ol className="main-card-tracklist-list">
                      {tracks?.["Side B"].map((track) => (
                        <li className="main-card-tracklist-list__item">
                          {track}
                        </li>
                      ))}
                    </ol>
                  </div>
                )}
              </div>
              {tracks?.["Side С"] && (
                <div className="main-card-tracklist-list-wrapper">
                  {tracks?.["Side С"] && (
                    <div className="main-card-tracklist">
                      <div className="main-card-tracklist-list-header">
                        Side C
                      </div>
                      <ol className="main-card-tracklist-list">
                        {tracks?.["Side С"].map((track) => (
                          <li className="main-card-tracklist-list__item">
                            {track}
                          </li>
                        ))}
                      </ol>
                    </div>
                  )}
                  {tracks?.["Side D"] && (
                    <div className="main-card-tracklist">
                      <div className="main-card-tracklist-list-header">
                        Side D
                      </div>
                      <ol className="main-card-tracklist-list">
                        {tracks?.["Side D"].map((track) => (
                          <li className="main-card-tracklist-list__item">
                            {track}
                          </li>
                        ))}
                      </ol>
                    </div>
                  )}
                </div>
              )}
              {tracks?.["Side E"] && (
                <div className="main-card-tracklist-list-wrapper">
                  {tracks?.["Side E"] && (
                    <div className="main-card-tracklist">
                      <div className="main-card-tracklist-list-header">
                        Side E
                      </div>
                      <ol className="main-card-tracklist-list">
                        {tracks?.["Side E"].map((track) => (
                          <li className="main-card-tracklist-list__item">
                            {track}
                          </li>
                        ))}
                      </ol>
                    </div>
                  )}
                  {tracks?.["Side F"] && (
                    <div className="main-card-tracklist">
                      <div className="main-card-tracklist-list-header">
                        Side F
                      </div>
                      <ol className="main-card-tracklist-list">
                        {tracks?.["Side F"].map((track) => (
                          <li className="main-card-tracklist-list__item">
                            {track}
                          </li>
                        ))}
                      </ol>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
