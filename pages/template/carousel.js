import React, { useState, useEffect } from "react";
import ItemsCarousel from "react-items-carousel";

const noOfItems = 7;
const noOfCards = 4;
const chevronWidth = 60;

const Carousel = () => {
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
      console.log("123", isClient)
    if (!isClient) {
      return false;
    }

    function handleResize() {
      setWindowSize(getSize());
      let size = getSize();
      if (size.width < 576) {
        setNoOfCards(1);
      } else if (size.width >= 576 && size.width < 768) {
        setNoOfCards(2);
      } else if (size.width >= 768 && size.width < 992) {
        setNoOfCards(3);
      } else if (size.width >= 992 && size.width < 1200) {
        setNoOfCards(4);
      }else{
        setNoOfCards(4);
      }
    }    
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  console.log("width", windowSize);
  console.log("size", noOfCards);

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
        infiniteLoop={true}
        gutter={10}
        activePosition={"center"}
        chevronWidth={chevronWidth}
        disableSwipe={false}
        alwaysShowChevrons={false}
        numberOfCards={noOfCards}
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
        {Array.from(file_data).map((item, i) => (
          <div
            key={i}
            className={`card ${i}`}
            style={
              {
                //   height: 390
                //   width:230
              }
            }
          >
            {/* {item } */}
            <img src={`/images/${item}`} />
            <span className="title">
              BRIDAL <i class="fas fa-circle"></i> COSTUME
            </span>

            <span className="name">
              Mylah Morales&nbsp;
              <i class="fas fa-calendar-check"></i>
            </span>
            <span className="location">
              <i class="far fa-paper-plane"></i>&nbsp; brooklyn, NY
            </span>
            <span className="appointment">160 appointment, $$</span>
          </div>
        ))}
      </ItemsCarousel>
    </div>
  );
};

export default Carousel;
