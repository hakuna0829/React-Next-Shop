import React from "react";
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/scss/image-gallery.scss";

const images = [
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
  ];
  
class SingleCarousel extends React.Component {
  constructor() {
    super();
    this.state = {
      currentIndex: 0,
      items: [1, 2, 3, 4, 5]
    };
  }

 

  render() {
    return <ImageGallery 
        showPlayButton={false}
        showFullscreenButton={false}
        items={images} />;
  }
}
export default SingleCarousel;
