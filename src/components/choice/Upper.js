import React from "react";
import { Link } from "react-router-dom";

export default function Upper() {
  return (
    <div className="upper">
      <div className="container">
        <div className="bread">
          <Link to="/" className="bread-item">
            Home{" "}
          </Link>
          <Link to="/choice" className="bread-item">
            / Our choice
          </Link>
        </div>
        <div className="upper-wrapper">
          <h1>Our choice</h1>
          <div className="upper-wrapper-text">
            There is a list of singles for the Anna’s Birthday or another
            holiday {`:)`}
          </div>
        </div>
      </div>
    </div>
  );
}
