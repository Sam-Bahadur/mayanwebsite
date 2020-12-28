import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React from "react";
import hero from "../../assets/img/hero_img.png";
import style from "./Carousel.module.scss";
import { Link } from "react-router-dom";
import {BiRightArrowAlt} from "react-icons/bi"

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
        <div className={style.hero_main}>
          <div className={style.image}>
            <img src={hero} alt="" srcset="" />
          </div>
          <div className={style.text}>
            <h4>
              Mayan is a cutting-edge millennial Media and IT Consulting company
              founded by young technology enthusiasts of Nepal. At Mayan, our
              mission is to be your one stop solution for all your media and IT
              needs while we simultaneously help revolutionize the current
              landscape of Nepali media and IT industry.
              <Link to="/about">
                <button>Read More
                </button>
              </Link>
            </h4>
          </div>
        </div>
        {/* <div className={style.normal_hero}>
          <img src={hero} alt="" srcset="" />
        </div> */}
      </Slider>
    </div>
  );
}
