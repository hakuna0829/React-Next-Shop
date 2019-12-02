import React, { useState, useEffect } from "react";
import Link from "next/link";
import ItemsCarousel from "react-items-carousel";

const noOfCards = 4;
const chevronWidth = 30;
const gutter = 12; //space between each cards

const MultiCarousel = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [noOfCards, setNoOfCards] = useState(4);

  const isClient = typeof window === "object";

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined
    };
  }
  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    if (!isClient) {
      return false;
    }

    function handleResize() {
      setWindowSize(getSize());
      let size = getSize();
      if (size.width < 576) {
        setNoOfCards(2);
      } else if (size.width >= 576 && size.width < 768) {
        setNoOfCards(2);
      } else if (size.width >= 768 && size.width < 992) {
        setNoOfCards(3);
      } else if (size.width >= 992 && size.width < 1200) {
        setNoOfCards(4);
      } else {
        setNoOfCards(4);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  const file_data = [
    "user4.jpg",
    "user5.png",
    "user9.jpg",
    "makeup_1.jpg",
    "makeup_3.png",
    "lowerRight.png"
  ];

  return (
    <div className="carousel_main">
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={noOfCards}
        gutter={gutter}
        outsideChevron
        chevronWidth={chevronWidth}
        infiniteLoop={true}
        activePosition={"center"}
        disableSwipe={false}
        numberOfCards={noOfCards}
        slidesToScroll={1}
        outsideChevron={false}
        requestToChangeActive={value => {
          setActiveItemIndex(value);
        }}
        rightChevron={
          <button type="button" className="chevron right-chevron"></button>
        }
        leftChevron={
          <button type="button" className="chevron left-chevron"></button>
        }
      >
        {Array.from(file_data).map((item, i) => (
          <Link href={`/search/artist/${i}`} key={i}>
            <div className={`card ${i}`}>
              {/* {item } */}
              <div className="card_item">
                <div className="cover_image">
                  <img src={`/images/${item}`} />
                </div>               
              </div>
              <span className="bookmark">
                  <i className="far fa-bookmark"></i>
                </span>
                <span className="title">
                  BRIDAL <b>&#183;</b>  COSTUME
                </span>

                <span className="name">
                  Mylah Morales&nbsp;
                  <i className="fas fa-calendar-check"></i>
                </span>

                <span className="location">
                  <i className="far fa-paper-plane"></i>&nbsp; brooklyn, NY
                </span>

                <span className="appointment">160 appointment, $$</span>
            </div>
          </Link>
        ))}
      </ItemsCarousel>
    </div>
  );
};

export default MultiCarousel;
