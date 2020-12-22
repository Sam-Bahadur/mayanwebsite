import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React from "react";
import hero from "../../assets/img/hero_img2.png";
import style from "./Carousel.module.scss";

export default function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    arrows: false,
    autoplaySpeed: 3000,
  };
  return (
    <div className={style.carousel}>
      <Slider {...settings}>
        <div>
          <img src={hero} alt="" srcset="" />
        </div>
        <div>
          <img src={hero} alt="" srcset="" />
        </div>
        <div>
          <img src={hero} alt="" srcset="" />
        </div>
        <div>
          <img src={hero} alt="" srcset="" />
        </div>
      </Slider>
    </div>
  );
}
