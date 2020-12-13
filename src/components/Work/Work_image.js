import React from "react";
import style from "./Work.module.scss";

export default function Work_image(props) {
  return (
    <div className={style.scroller}>
      <img src={props.image} alt="" />
    </div>
  );
}
