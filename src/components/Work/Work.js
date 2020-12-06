import React from "react";
import style from "./Work.module.scss";
import { Container } from "@material-ui/core";
import { BiCodeAlt } from "react-icons/bi";
import { DiCodeigniter } from "react-icons/di";
import { SiVisualstudiocode } from "react-icons/si";

export default function Work() {
  return (
    <Container>
      <works>
        <div className={style.work}>
          <div className={style.work_image}>
            <SiVisualstudiocode />
          </div>
          <div className={style.work_title}>Web Design and Development</div>
          <div className={style.work_desc}>
            A clean, user-friendly, optimized and snappy website is a must in
            today’s day and age to attract web traffic. We design and deliver
            websites of impeccable quality.
          </div>
        </div>
        <div className={style.work}>
          <div className={style.work_image}>
            <DiCodeigniter />
          </div>
          <div className={style.work_title}>Title 1</div>
          <div className={style.work_desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            voluptate quisquam fugiat laboriosam? Ad sapiente ex voluptatibus
            sequi iste labore necessitatibus error ipsa aspernatur voluptatum
          </div>
        </div>
        <div className={style.work}>
          <div className={style.work_image}>
            <BiCodeAlt />
          </div>
          <div className={style.work_title}>Title 1</div>
          <div className={style.work_desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            voluptate quisquam fugiat laboriosam? Ad sapiente ex voluptatibus
            sequi iste labore necessitatibus error ipsa aspernatur voluptatum
          </div>
        </div>
      </works>
    </Container>
  );
}
