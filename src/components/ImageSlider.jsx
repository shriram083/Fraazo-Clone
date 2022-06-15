import React from "react";
import { Image } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageSlider = ({ slides }) => {
  return (
    <Carousel infiniteLoop autoPlay showThumbs={true}>
      {slides.map((slide) => {
        return (
          <Image key={slide.id} src={slide.img} height="auto" width="800px" />
        );
      })}
    </Carousel>
  );
};

export default ImageSlider;
