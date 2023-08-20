import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../img/logo-black.svg";
import search from "../img/search-black.svg";
import fav from "../img/fav-black.svg";
import bag from "../img/bag-black.svg";
import bagFill from "../img/Bag-fill.svg";
import mobileIcon from "../img/mobile-menu-black.svg";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../redux/slices/searchReducer";
import searchBlack from "../img/search-black.svg";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [mobile, setMobile] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const inp = useRef();
  const totalCount = useSelector((state) => state.bag.totalCount);

  function handleSearch(event) {
    if (event.key == "Enter") {
      dispatch(setSearch(inp.current.value));
      navigate("/catalogue");
    }
  }
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-wrapper">
            <Link
              to="/"
              style={{ backgroundImage: `url(${logo})` }}
              className="header-logo"
            ></Link>
            <div className="header-menu">
              <Link
                to="/catalogue"
                className="header-menu__item header-menu__item-black"
              >
                Catalogue
              </Link>
              <Link
                to="/choice"
                className="header-menu__item header-menu__item-black"
              >
                Our choice
              </Link>
              <Link
                to="/about"
                className="header-menu__item header-menu__item-black"
              >
                About
              </Link>
              <Link
                to="/delivery"
                className="header-menu__item header-menu__item-black"
              >
                Delivery & Payment
              </Link>
              <Link
                to="/contact"
                className="header-menu__item header-menu__item-black"
              >
                Contact
              </Link>
            </div>
            <div className="header-icons">
              <div
                onClick={() => setOpen((prev) => !prev)}
                style={{ backgroundImage: `url(${search})` }}
                className="header-icons__item header-icons__item-search"
              ></div>
              {open && (
                <input
                  ref={inp}
                  onKeyUp={handleSearch}
                  className="header-icons-input header-icons-input-black"
                  type="text"
                  placeholder=""
                ></input>
              )}
              <Link
                to="/fav"
                style={{ backgroundImage: `url(${fav})` }}
                className="header-icons__item"
              ></Link>
              <Link
                to="/bag"
                style={
                  totalCount == 0
                    ? { backgroundImage: `url(${bag})` }
                    : { backgroundImage: `url(${bagFill})` }
                }
                className="header-icons__item"
              >
                {totalCount != 0 ? (
                  <span className="header-icons__item-text">{totalCount}</span>
                ) : (
                  <span className="header-icons__item-text"></span>
                )}
              </Link>
              <div
                onClick={() => setMobile((prev) => !prev)}
                style={{ backgroundImage: `url(${mobileIcon})` }}
                className="header-icons__menu-mobile"
              ></div>
            </div>
          </div>
          {mobile && (
            <div className="menu-mobile">
              <div
                onClick={() => setMobile((prev) => !prev)}
                className="menu-mobile-close"
              >
                <svg
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="2.5334"
                    height="25.334"
                    transform="matrix(-0.720062 -0.693909 -0.693909 0.720062 20.4023 1.75793)"
                    fill="#171717"
                  />
                  <rect
                    x="1.40234"
                    y="1.75793"
                    width="2.5334"
                    height="25.334"
                    transform="rotate(-43.9404 1.40234 1.75793)"
                    fill="#171717"
                  />
                </svg>
              </div>
              <div className="menu-mobile-items">
                <Link
                  to="/catalogue"
                  className="menu-mobile-items__item header-menu__item header-menu__item-black"
                >
                  Catalogue
                </Link>
                <Link
                  to="/choice"
                  className="menu-mobile-items__item header-menu__item header-menu__item-black"
                >
                  Our choice
                </Link>
                <Link
                  to="/about"
                  className="menu-mobile-items__item header-menu__item header-menu__item-black"
                >
                  About
                </Link>
                <Link
                  to="/delivery"
                  className="menu-mobile-items__item header-menu__item header-menu__item-black"
                >
                  Delivery & Payment
                </Link>
                <Link
                  to="/contact"
                  className="menu-mobile-items__item header-menu__item header-menu__item-black"
                >
                  Contact
                </Link>
              </div>
              <div className="menu-mobile-search-wrapper">
                <div
                  style={{ backgroundImage: `url(${searchBlack})` }}
                  className="header-icons__item"
                ></div>
                <input
                  className="header-icons-input header-icons-input-black"
                  type="text"
                  placeholder=""
                  onKeyUp={handleSearch}
                  ref={inp}
                ></input>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
