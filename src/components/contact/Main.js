import React from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

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
          <YMaps>
            <div className="contact-map">
              <Map
                width={1000}
                height={455}
                defaultState={{
                  center: [44.4048, 8.94439],
                  zoom: 12,
                  controls: [],
                }}
              >
                {" "}
                <Placemark geometry={[44.4048, 8.94439]} />{" "}
              </Map>
            </div>
          </YMaps>
        </div>
      </div>
    </div>
  );
}
