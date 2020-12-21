import React from "react";
import style from "./Slogan.module.scss";
import { Container } from "@material-ui/core";
import { Link } from "react-router-dom";
import Dividor from "./../common/Dividor/Dividor";

export default function Slogan() {
  return (
    <Container>
      <slogan>
        <div className={style.description}>
          "Mayan is a cutting-edge millennial Media and IT Consulting company
          founded by young technology enthusiasts of Nepal. At Mayan, our
          mission is to be your one stop solution for all your media and IT
          needs while..."
          <div className={style.readmore}>
            <Link to="/about">Read More</Link>
          </div>
        </div>
      </slogan>
      <Dividor />
    </Container>
  );
}
