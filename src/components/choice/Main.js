import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Main() {
  const [singles, setSingles] = useState([]);
  useEffect(() => {
    axios
      .get(`https://646bb7447d3c1cae4ce43199.mockapi.io/Singles`)
      .then((res) => {
        setSingles([
          res.data[3],
          res.data[4],
          res.data[14],
          res.data[15],
          res.data[16],
        ]);
      });
  }, []);
  return (
    <section className="choice">
      <div className="container">
        <div className="choice-wrapper">
          {singles.map((sample, key) => (
            <>
              <div className="choice-card">
                <Link to={`/card/${sample.id}`}>
                  {" "}
                  <div className="card-image-wrapper card-image-wrapper-choice">
                    <img src={sample.image} className="card-image" />
                  </div>
                </Link>
                <div className="choice-card-wrapper">
                  <div className="choice-card-wrapper-number">{key + 1}.</div>
                  <div className="choice-card-wrapper-text">
                    <div className="card-header">{sample.artist}</div>
                    <div className="card-text">{sample.title}</div>
                  </div>
                </div>
              </div>
              <div className="choice-line"></div>
            </>
          ))}
        </div>
      </div>
    </section>
  );
}
