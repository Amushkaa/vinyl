import React, { useEffect, useState } from "react";
import Filter from "./Filter";
import searchIcon from "../../img/search-black.svg";
import Products from "../Products";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../../redux/slices/searchReducer";
import { setOrder } from "../../redux/slices/genreReducer";

export default function MainPart({}) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const search = useSelector((state) => state.search.search);
  const [rotate, setRotate] = useState(true);
  const order = useSelector((state) => state.genre.order);
  const [limit, setLimit] = useState(18);
  const [button, setButton] = useState(false);
  console.log(limit);

  useEffect(() => {
    setValue(search);
    setButton(false);
  }, [search]);

  function handleSearch(event) {
    if (event.key == "Enter") {
      dispatch(setSearch(value));
    }
  }

  window.onbeforeunload = () => {
    setValue("");
    dispatch(setSearch(""));
  };

  return (
    <div className="catalogue">
      <div className="container">
        <div className="catalogue-wrapper">
          <Filter />
          <div className="catalogue-main">
            <div className="catalogue-search">
              <div className="catalogue-search-wrapper">
                <input
                  style={{ background: `url(${searchIcon}) no-repeat` }}
                  placeholder="Search"
                  className="catalogue-search__input"
                  onChange={(event) => setValue(event.target.value)}
                  value={value}
                  onKeyUp={handleSearch}
                ></input>
                <div className="catalogue-search-buttons-wrapper">
                  <button
                    onClick={() => dispatch(setSearch(value))}
                    className="button button-white"
                  >
                    Search
                  </button>
                  <button
                    onClick={() => {
                      setValue("");
                      dispatch(setSearch(""));
                    }}
                    className="button-line"
                  >
                    Cancel
                  </button>
                </div>
              </div>
              <div
                className="catalogue-search__sort"
                onClick={() =>
                  setOpen((prev) => !prev) & setRotate((prev) => !prev)
                }
              >
                Sort by{" "}
                <svg
                  className="catalogue-search__sort-arrow"
                  width="8"
                  height="13"
                  viewBox="0 0 8 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ transform: `scale(${rotate ? (1, 1) : (1, -1)})` }}
                >
                  <path
                    d="M4.35355 12.3536C4.15829 12.5488 3.84171 12.5488 3.64645 12.3536L0.464466 9.17157C0.269204 8.97631 0.269204 8.65973 0.464466 8.46447C0.659728 8.2692 0.976311 8.2692 1.17157 8.46447L4 11.2929L6.82843 8.46447C7.02369 8.2692 7.34027 8.2692 7.53553 8.46447C7.7308 8.65973 7.7308 8.97631 7.53553 9.17157L4.35355 12.3536ZM4.5 0V12H3.5V0L4.5 0Z"
                    fill="#171717"
                  />
                </svg>
              </div>
              {open && (
                <div className="catalogue-sort">
                  <span
                    className={`catalogue-sort__item catalogue-sort__item-name ${
                      order == "" ? "sort-chosen" : ""
                    }`}
                    onClick={() => dispatch(setOrder(""))}
                  >
                    New
                  </span>
                  <div
                    className="catalogue-sort__item"
                    onClick={() => dispatch(setOrder("orderby=rate"))}
                  >
                    <span
                      className={`catalogue-sort__item-name ${
                        order == "orderby=rate" ? "sort-chosen" : ""
                      }`}
                    >
                      Popular
                    </span>
                    <span className="catalogue-sort__item-desc">
                      more popular
                    </span>
                  </div>
                  <div
                    className="catalogue-sort__item"
                    onClick={() =>
                      dispatch(setOrder("order=desc&orderby=rate"))
                    }
                  >
                    <span
                      className={`catalogue-sort__item-name ${
                        order == "order=desc&orderby=rate" ? "sort-chosen" : ""
                      }`}
                    >
                      Popular
                    </span>
                    <span className="catalogue-sort__item-desc">
                      less popular
                    </span>
                  </div>
                  <div
                    className="catalogue-sort__item"
                    onClick={() => dispatch(setOrder("orderby=price"))}
                  >
                    <span
                      className={`catalogue-sort__item-name ${
                        order == "orderby=price" ? "sort-chosen" : ""
                      }`}
                    >
                      Price
                    </span>
                    <span className="catalogue-sort__item-desc">
                      low to high
                    </span>
                  </div>
                  <div
                    className="catalogue-sort__item"
                    onClick={() =>
                      dispatch(setOrder("order=desc&orderby=price"))
                    }
                  >
                    <span
                      className={`catalogue-sort__item-name ${
                        order == "order=desc&orderby=price" ? "sort-chosen" : ""
                      }`}
                    >
                      Price
                    </span>
                    <span className="catalogue-sort__item-desc">
                      high to low
                    </span>
                  </div>
                </div>
              )}
            </div>

            <Products
              limit={limit}
              setLimit={setLimit}
              button={button}
              setButton={setButton}
            />
            <button
              className={`button button-white catalogue-more ${
                button ? "" : "none"
              }`}
              onClick={() => setLimit(limit + 9)}
            >
              Load more
            </button>
            <div className="catalogue-pagination"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
