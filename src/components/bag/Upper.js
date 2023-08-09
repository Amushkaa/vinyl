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
          <Link to="/bag" className="bread-item">
            / Bag
          </Link>
        </div>
        <div className="upper-wrapper">
          <h1>Your bag</h1>
        </div>
      </div>
    </div>
  );
}
