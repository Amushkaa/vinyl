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
          <Link to="/contact" className="bread-item">
            / Contacts
          </Link>
        </div>
        <div className="upper-wrapper">
          <h1>Contacts</h1>
        </div>
      </div>
    </div>
  );
}
