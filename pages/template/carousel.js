import React, { useState, useEffect } from "react";
import ItemsCarousel from "react-items-carousel";

const noOfItems = 7;
const noOfCards = 2;
const chevronWidth = 60;

const ResponsiveLayout = ({ breakpoint, renderMobile, renderDesktop }) => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return width > breakpoint ? renderDesktop() : renderMobile();
};

const Carousel = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const file_data = [
    "user4.jpg",
    "user5.png",
    "user9.jpg",
    "makeup_1.jpg",
    "makeup_3.png",
    "lowerRight.png"
  ];
  Array.from(file_data).map((file, i) => {
    // console.log(file);
  });

  return (
    <div className="carousel_main">
      <ItemsCarousel
        infiniteLoop={true}
        gutter={12}
        activePosition={"center"}
        chevronWidth={chevronWidth}
        disableSwipe={false}
        alwaysShowChevrons={false}
        numberOfCards={4}
        slidesToScroll={1}
        outsideChevron={true}
        showSlither={true}
        firstAndLastGutter={true}
        activeItemIndex={activeItemIndex}
        requestToChangeActive={value => {
          setActiveItemIndex(value);
        }}
        rightChevron={<i className="fas fa-chevron-circle-right"></i>}
        leftChevron={<i className="fas fa-chevron-circle-left"></i>}
      >
        {/* {Array.from(new Array(10)).map((_, i) => (
          <div
            key={i}
            style={{
              height: 200,
              background: "url(https://placeimg.com/380/200/nature)"
            }}
          />
        ))} */}
        {Array.from(file_data).map((item, i) => (
          <div
            key={i}
            className={`card ${i}`}
            style={{
              height: 390
              //   width:230
            }}
          >
            {/* {item } */}
            <img src={`/images/${item}`} style={{ height: 200, width: 200 }} />
            <span className="title">BRIDAL COSTUME</span>

            <span className="name">
              mYLAH mORALES&nbsp;
              <i class="fas fa-calendar-check"></i>
            </span>
            <span className="location">
              <i class="far fa-paper-plane"></i>&nbsp;
              brooklyn, NY
            </span>
            <span className="appointment">160 appointment, $$</span>
          </div>
        ))}
      </ItemsCarousel>
    </div>
  );
};

export default Carousel;
