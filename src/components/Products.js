import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SmallCard from "./SmallCard";
import { useSelector } from "react-redux";

export default function Products({ limit, setLimit, button, setButton }) {
  const search = useSelector((state) => state.search.search);
  const genre = useSelector((state) => state.genre.genre);
  const artists = useSelector((state) => state.genre.artists);
  const [singles, setSingles] = useState([]);
  const order = useSelector((state) => state.genre.order);
  const min = useSelector((state) => state.genre.min);
  const max = useSelector((state) => state.genre.max);

  useEffect(() => {
    axios
      .get(
        `https://646bb7447d3c1cae4ce43199.mockapi.io/Singles?genre=${genre}&${order}&page=1&limit=${limit}`
      )
      .then((res) => {
        setSingles(
          res.data
            .filter((elem) => {
              return (
                elem.artist.toLowerCase().includes(search.toLowerCase()) ||
                elem.title.toLowerCase().includes(search.toLowerCase())
              );
            })
            .filter((elem) => {
              if (artists.length) {
                setLimit(60);
                return artists.includes(elem.artist);
              } else {
                return elem;
              }
            })
            .filter((elem) => {
              if (min != 0 && max != 0) {
                return elem.price >= min && elem.price <= max;
              } else if (min != 0) {
                return elem.price >= min;
              } else if (max != 0) {
                return elem.price <= max;
              } else {
                return elem;
              }
            })
        );
      });
  }, [genre, order, search, artists, min, max, limit]);

  if (singles.length == 0) {
    return (
      <div className="no-items">
        No items found ☹. <br /> Maybe you should look for something else?
      </div>
    );
  }

  if (singles.length >= 18 && limit <= singles.length) {
    setButton(true);
  } else if (singles.length < 18 || limit > singles.length) {
    setButton(false);
  }
  return (
    <div className="singles">
      {singles.map((sample) => (
        <SmallCard sample={sample} />
      ))}
    </div>
  );
}
