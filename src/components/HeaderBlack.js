import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../img/logo-black.svg";
import search from "../img/search-black.svg";
import fav from "../img/fav-black.svg";
import bag from "../img/bag-black.svg";
import bagFill from "../img/Bag-fill.svg";
import mobile from "../img/mobile-menu.svg";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../redux/slices/searchReducer";

export default function Header() {
  const [open, setOpen] = useState(false);
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
                className="header-icons__item"
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
