import React, { useRef, useState } from "react";
import Slider from "react-slick";
function Carousel(props) {
  var settings = {
    dots: true,
    infinite: false,
    arrows: true,
    speed: 500,
    slidesToShow: props.slidesToShow ?? 1,
    slidesToScroll: props.slidesToScroll ?? 1,
    initialSlide: props.initialSlide ?? 0,
  };
  debugger;
  return <Slider {...settings}>{props.children}</Slider>;
}

export default Carousel;
