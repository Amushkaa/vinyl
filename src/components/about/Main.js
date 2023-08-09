import React from "react";
import shop from "../../img/shop.png";
import shop1 from "../../img/shop1.png";

export default function Main() {
  return (
    <div className="container">
      <div className="about-container">
        <div className="about-container-left">
          <h2 className="about-header">Our store</h2>
          <div className="about-container-left-wrapper">
            <div className="about-image__first-wrapper">
              <img src={shop} className="about-image__first" />
            </div>
            <span className="about-image__desc">The Vinyl Records Store</span>
          </div>
        </div>
        <div className="about-container-right">
          <h3 className="about-header-right">
            We have a&nbsp;large offline store where you can touch real vinyl
          </h3>
          <div className="about-container-right-wrapper">
            <div className="about-container-right__text">
              <p>
                Located in&nbsp;the&nbsp;heart of&nbsp;the&nbsp;city, our store
                is&nbsp;a&nbsp;haven for&nbsp;those who appreciate
                the&nbsp;warm, rich sound and&nbsp;unique nostalgia
                of&nbsp;vinyl records.
              </p>
              <p>
                Upon stepping into our store, you will be greeted by&nbsp;rows
                upon rows of&nbsp;vinyl records, neatly organized into various
                genres and&nbsp; eras.
              </p>
            </div>
            <div className="about-container-right__text">
              <p>
                Whether you're searching for&nbsp;classic rock, jazz, blues,
                hip-hop, or even the latest releases, we have an&nbsp;extensive
                collection to&nbsp;satisfy every taste and preference.
              </p>
              <p>
                Vinyl Haven is&nbsp;not&nbsp;just a&nbsp;store
                it's&nbsp;a&nbsp;community. We regularly host live music
                performances, album listening parties, and other exciting events
                to&nbsp;celebrate the&nbsp;beauty of&nbsp;vinyl culture.
              </p>
            </div>
          </div>
          <div className="about-image__second-wrapper">
            <img src={shop1} className="about-image__second" />
          </div>
        </div>
      </div>
    </div>
  );
}
