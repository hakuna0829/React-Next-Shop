import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/scss/alice-carousel.scss";

class SingleCarousel extends React.Component {
  constructor() {
    super();
    this.state = {
      currentIndex: 0,
      items: [1, 2, 3, 4, 5]
    };
  }

  slideTo = i => this.setState({ currentIndex: i });

  onSlideChanged = e => this.setState({ currentIndex: e.item });

  slideNext = () =>
    this.setState({ currentIndex: this.state.currentIndex + 1 });

  slidePrev = () =>
    this.setState({ currentIndex: this.state.currentIndex - 1 });

  renderThumbs = () => (
    <ul>
      {this.state.items.map((item, i) => (
        <li key={i} onClick={() => this.slideTo(i)}>
          Thumb {item}
        </li>
      ))}
    </ul>
  );

  renderGallery() {
    const { currentIndex, items } = this.state;

    return (
      <AliceCarousel
        dotsDisabled={false}
        buttonsDisabled={true}
        slideToIndex={currentIndex}
        onSlideChanged={this.onSlideChanged}
      >
        {items.map((item, i) => (
          <div key={i} className="yours-custom-class">
            <h2>{item}</h2>
          </div>
        ))}
      </AliceCarousel>
    );
  }

  render() {
    return (
      <div>
        <h3>Navigation</h3>
        <h3>React Alice Carousel</h3>
        <div>
          {this.renderGallery()}
          <div><i onClick={() => this.slidePrev()} className="right-chevron fas fa-chevron-circle-left"></i></div>
          <div><i onClick={() => this.slideNext()} className="right-chevron fas fa-chevron-circle-right"></i></div>         
        </div>
        {this.renderThumbs()}
      </div>
    );
  }
}
export default SingleCarousel;
