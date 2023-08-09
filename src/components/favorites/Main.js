import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Products from "../Products";
import SmallCard from "../SmallCard";

export default function Main() {
  const singles = useSelector((state) => state.favorites.favorites);
  if (singles.length == 0) {
    return (
      <div className="container">
        <div className="upper-wrapper">
          <div className="no-items">
            It looks like you haven't added anything to your favorites yet ☹.{" "}
            Maybe you should choose something in the{" "}
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
    <div className="favorites">
      <div className="container">
        <div className="favorites-wrapper">
          {singles.map((sample, index) => (
            <SmallCard sample={sample} singles={singles} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
