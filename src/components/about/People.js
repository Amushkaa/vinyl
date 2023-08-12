import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import kyle from "../../img/Kyle.jpg";
import sarah from "../../img/Sarah.jpg";
import emily from "../../img/Emily.jpg";
import olivia from "../../img/Olivia.jpg";
import grace from "../../img/Grace.jpg";
import jessica from "../../img/Jessica.jpg";
import james from "../../img/James.jpg";
import david from "../../img/David.jpg";
import benjamin from "../../img/Benjamin.jpg";
import ethan from "../../img/Ethan.jpg";

export default function People() {
  let people = [
    {
      id: 1,
      name: "Kyle Fisher",
      img: kyle,
      position: "Manager",
    },
    {
      id: 2,
      name: "James Thompson",
      img: david,
      position: "Store Manager",
    },
    {
      id: 3,
      name: "Sarah Harrison",
      img: sarah,
      position: "Assistant Manager",
    },
    {
      id: 4,
      name: "David Franklin",
      img: james,
      position: "Sales Associate",
    },
    {
      id: 5,
      name: "Emily Davis",
      img: emily,
      position: "Customer Service Representative",
    },
    {
      id: 7,
      name: "Benjamin Hughes",
      img: benjamin,
      position: "Marketing Coordinator",
    },
    {
      id: 6,
      name: "Olivia Phillips",
      img: olivia,
      position: "Inventory Coordinator",
    },
    {
      id: 8,
      name: "Grace Turner",
      img: grace,
      position: "Social Media Specialist",
    },
    {
      id: 9,
      name: "Ethan Walker",
      img: ethan,
      position: "Vinyl Buyer",
    },
    {
      id: 10,
      name: "Jessica Turner",
      img: jessica,
      position: "Store Photographer",
    },
  ];
  return (
    <>
      <div className="container">
        <div className="people-wrapper">
          <div className="people-wrapper-upper">
            <h2>Our team</h2>
            <div className="people-wrapper-upper-text">
              Our team has the most proven music lovers. They carefully check
              all products, make selections, take care of the plates so that the
              best music plays in your house.
            </div>
          </div>
        </div>
      </div>
      <div className="container-slider container">
        <div className="people-slider">
          <Swiper
            slidesPerView={4}
            spaceBetween={25}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {people.map((person) => (
              <SwiperSlide>
                <div className="person">
                  <div className="person-image-wrapper">
                    <img src={person.img} className="person-image" />
                  </div>
                  <div className="person-name">{person.name}</div>
                  <div className="person-position">{person.position}</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}
