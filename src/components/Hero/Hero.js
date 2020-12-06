import React from "react";
import { Container } from "@material-ui/core";
import style from "./Hero.module.scss";
import Carousel from "./../carousel/Carousel";

export default function Hero() {
  return (
    <Container>
      <div className={style.hero_text}>
        Mayan Media and &nbsp;
        <span>Consulting</span>
      </div>
      <div className={style.hero_desc}>
        One stop solution for all the digital needs
      </div>
      <Carousel />
    </Container>
  );
}
