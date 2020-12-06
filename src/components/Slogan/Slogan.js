import React from "react";
import style from "./Slogan.module.scss";
import { Container } from "@material-ui/core";

export default function Slogan() {
  return (
    <Container>
      <slogan>
        <div className={style.heading}>Build up the whole picture</div>
        <div className={style.description}>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum — semper quis lectus nulla
          at volutpat diam ut venenatis.
        </div>
      </slogan>
    </Container>
  );
}
