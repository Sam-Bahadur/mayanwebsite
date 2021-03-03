import React, { useLayoutEffect } from "react";
import { Container } from "@material-ui/core";
import style from "./TeamDetail.module.scss";

export default function TeamDetail(props) {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <div className={style.teamdetails}>
        <div className={style.image}>
          <img src={props.location.image} alt="" srcset="" />
        </div>
        <div className={style.name}>
          {props.location.name} / <span>{props.location.post}</span>
        </div>
        <div className={style.desc}>{props.location.desc}</div>
      </div>
    </>
  );
}
