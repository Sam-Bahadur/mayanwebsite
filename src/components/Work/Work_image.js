import React from "react";
import style from "./Work.module.scss";

export default function Work_image(props) {
  return (
    <div className={style.scroller}>
      <a href={props.link} target="_blank">
        <img src={props.image} alt="" />
      </a>
    </div>
  );
}
