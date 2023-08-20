import React, { useEffect, useRef, useState } from "react";
import { YMaps, Map, Placemark, useYMaps } from "@pbe/react-yandex-maps";
import loc from "../../img/loc.svg";

// var myPlacemark = new ymaps.Placemark(
//   [55.76, 37.56],
//   {},
//   {
//     iconLayout: "default#image",
//     iconImageHref: "../img/location.svg",
//     icon_imagesize: [30, 42],
//     iconImageOffset: [-3, -42],
//   }
// );

export default function Main() {
  const mapRef = useRef(null);
  const ymaps = useYMaps(["Map", "Placemark"]);
  const placemarkRef = useRef(null);
  const mapWidth = useState(974);

  useEffect(() => {
    if (!ymaps || !mapRef.current) {
      return;
    }

    const map = new ymaps.Map(mapRef.current, {
      center: [44.4048, 8.94439],
      zoom: 14,
    });

    const placemark = new ymaps.Placemark(
      [44.4048, 8.94439],
      {
        balloonContent: "",
      },
      {
        iconLayout: "default#image",
        iconImageHref: loc,
        iconImageSize: [64, 64],
        iconImageOffset: [-40, -40],
      }
    );
    map.geoObjects.add(placemark);
  }, [ymaps]);

  return (
    <div className="contact">
      <div className="container">
        <div className="contact-wrapper">
          <div className="contact-text">
            <span className="contact-text__item">
              Via S. Francesco, 5, 17024 Finale Ligure SV, Genova
            </span>
            <span className="contact-text__item">+777-777-77-77</span>
            <span className="contact-text__item">12:00-16:00</span>
            <span className="contact-text__item">sales@vinyl.com</span>
          </div>
          <div className="contact-map">
            <div
              ref={mapRef}
              style={{ width: `${mapWidth}px`, height: "455px" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
