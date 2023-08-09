import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../img/logo.svg";
import search from "../img/search.svg";
import fav from "../img/fav.svg";
import bag from "../img/bag.svg";
import bagFill from "../img/bag-white.svg";
import mobile from "../img/mobile-menu.svg";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../redux/slices/searchReducer";

export default function Header() {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const totalCount = useSelector((state) => state.bag.totalCount);
  const inp = useRef();

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
                className="header-menu__item header-menu__item-white"
              >
                Catalogue
              </Link>
              <Link
                to="/choice"
                className="header-menu__item header-menu__item-white"
              >
                Our choice
              </Link>
              <Link
                to="/about"
                className="header-menu__item header-menu__item-white"
              >
                About
              </Link>
              <Link
                to="/delivery"
                className="header-menu__item header-menu__item-white"
              >
                Delivery & Payment
              </Link>
              <Link
                to="/contact"
                className="header-menu__item header-menu__item-white"
              >
                Contact
              </Link>
            </div>
            <div className="header-icons">
              <div
                onClick={() => setOpen((prev) => !prev)}
                style={{ backgroundImage: `url(${search})` }}
                className="header-icons__item"
              ></div>
              {open && (
                <input
                  className="header-icons-input header-icons-input-white"
                  type="text"
                  placeholder=""
                  onKeyUp={handleSearch}
                  ref={inp}
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
                  <span className="header-icons__item-text-black">
                    {totalCount}
                  </span>
                ) : (
                  <span className="header-icons__item-text-black"></span>
                )}
              </Link>
              <div
                style={{ backgroundImage: `url(${mobile})` }}
                className="header-menu-mobile"
              ></div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
