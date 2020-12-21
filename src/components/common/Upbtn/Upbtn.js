import React from "react";
import style from "./Upbtn.module.scss";
import { AiOutlineArrowUp } from "react-icons/ai";
import { Link as ScrollLink } from "react-scroll";

export default function Upbtn() {
  return (
    <upbtn>
      <ScrollLink to="header" smooth={true}>
        <div className={style.button}>
          <div className={style.arrow}>
            <AiOutlineArrowUp />
          </div>
        </div>
      </ScrollLink>
    </upbtn>
  );
}
