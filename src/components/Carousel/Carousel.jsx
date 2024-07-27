import React from "react";
import { Carousel } from "react-responsive-carousel";
import { img } from "./img/data.js";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
function CarouselEffect() {
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteloop={true}
        showindicator={true}
        showThumbs={false}
      >
        {img.map((imageItemslink) => {
          return <img src={imageItemslink}  key={imageItemslink} alt="" />;
        })}
      </Carousel>
      <div className="hero_img"> </div>
    </div>
  );
}

export default CarouselEffect;
