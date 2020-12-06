import React from "react";
import style from "./Testomonial.module.scss";
import { Container } from "@material-ui/core";

export default function Testomonial() {
  return (
    <Container>
      <testomonial>
        Customer Testomonials
        <div className={style.testominials}>
          <div className={style.testomonial}>
            <div className={style.testomonial}>
              <div className={style.testomonial_desc}>
                DESCRIPTION Lorem ipsum dolor sit amet consectetur, adipisicing
                elit. Corporis odit officiis beatae labore provident eligendi
                esse dicta mollitia molestias ipsa.
              </div>
              <div className={style.testomonial_name}></div>
            </div>
          </div>
        </div>
      </testomonial>
    </Container>
  );
}
