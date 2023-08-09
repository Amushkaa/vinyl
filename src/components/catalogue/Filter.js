import React, { useEffect, useState } from "react";
import axios from "axios";
import plus from "../../img/plus.svg";
import minus from "../../img/minus.svg";
import {
  resetAll,
  setArtistsRedux,
  setGenre,
  setMax,
  setMin,
} from "../../redux/slices/genreReducer";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export default function Filter() {
  const [artists, setArtists] = useState([]);
  const [genres, setGenres] = useState([]);
  const [openGenre, setOpenGenre] = useState(true);
  const [openArtist, setOpenArtist] = useState(false);
  const [openPrice, setOpenPrice] = useState(false);
  const genre = useSelector((state) => state.genre.genre);
  const dispatch = useDispatch();
  const artistsRedux = useSelector((state) => state.genre.artists);
  const min = useSelector((state) => state.genre.min);
  const max = useSelector((state) => state.genre.max);

  function handleSelect(event) {
    dispatch(setArtistsRedux(event.target.value));
  }
  const genreChoice = function handleGenre(event) {
    if (event.target.checked) {
      dispatch(setGenre(event.target.value));
    } else {
      dispatch(setGenre(""));
    }
  };

  useEffect(() => {
    axios
      .get(`https://646bb7447d3c1cae4ce43199.mockapi.io/Singles`)
      .then((res) => {
        setArtists(
          res.data
            .reduce((newArray, obj) => {
              if (newArray.includes(obj.artist)) {
                return newArray;
              } else {
                newArray.push(obj.artist);
                return newArray;
              }
            }, [])
            .sort()
        );
        setGenres(
          res.data
            .reduce((newArray, obj) => {
              if (newArray.includes(obj.genre)) {
                return newArray;
              } else {
                newArray.push(obj.genre);
                return newArray;
              }
            }, [])
            .sort()
        );
      });
  }, []);
  return (
    <div className="filter">
      <div className="filter-wrapper">
        <div className="filter-line"></div>
        <div className="filter-wrapper-item">
          <div className="filter-header">
            <div className="filter-header-text">Genre</div>
            <button
              onClick={() => setOpenGenre((prev) => !prev)}
              className="filter-header-open"
            >
              {openGenre ? <img src={minus} /> : <img src={plus} />}
            </button>
          </div>
          {openGenre && (
            <div className="filter-list">
              <div className="filter-item-wrapper">
                <input
                  value={""}
                  type="radio"
                  onClick={genreChoice}
                  name="browser"
                ></input>
                <div className="filter-item-name red">All</div>
              </div>
              {genres.map((sample) => (
                <div className="filter-item-wrapper">
                  <input
                    value={sample}
                    type="radio"
                    checked={genre == sample}
                    onClick={genreChoice}
                    name="browser"
                  ></input>
                  <div className="filter-item-name">{sample}</div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="filter-line"></div>
        <div className="filter-wrapper-item">
          <div className="filter-header">
            <div className="filter-header-text">Artist</div>
            <button
              onClick={() => setOpenArtist((prev) => !prev)}
              className="filter-header-open"
            >
              {openArtist ? <img src={minus} /> : <img src={plus} />}
            </button>
          </div>
          {openArtist && (
            <div className="filter-list">
              {artists.map((sample) => (
                <div className="filter-item-wrapper">
                  <input
                    value={sample}
                    onChange={handleSelect}
                    checked={artistsRedux.includes(sample)}
                    type="checkbox"
                    name="browser"
                  ></input>
                  <div className="filter-item-name">{sample}</div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="filter-line"></div>
        <div className="filter-wrapper-item">
          <div className="filter-header">
            <div className="filter-header-text">Price</div>
            <button
              onClick={() => setOpenPrice((prev) => !prev)}
              className="filter-header-open"
            >
              {openPrice ? <img src={minus} /> : <img src={plus} />}
            </button>
          </div>
          {openPrice && (
            <div className="filter-price">
              <input
                onChange={(event) => dispatch(setMin(event.target.value))}
                value={min == 0 ? "" : min}
                type="number"
                className="filter-price-input"
                placeholder="$19.99"
              ></input>
              <span className="filter-price-between">-</span>
              <input
                value={max == 0 ? "" : max}
                onChange={(event) => dispatch(setMax(event.target.value))}
                type="number"
                className="filter-price-input"
                placeholder="$90.65"
              ></input>
            </div>
          )}
        </div>
        <div className="filter-line"></div>
        <button
          onClick={() => {
            dispatch(resetAll());
          }}
          className="button-line filter-button"
        >
          Reset Filters
        </button>
      </div>
    </div>
  );
}
