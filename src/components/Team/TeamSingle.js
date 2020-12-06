import React from "react";
import style from "./Team.module.scss";
import { useState } from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";
import pradeep from "../../assets/img/members/pradeep.jpg";

export default function TeamSingle(props) {
  const [ishover, setishover] = useState(false);
  const members = [
    {
      email: "pradipktimsina@gmail.com",
      phone: "+977-9843534725",
    },
  ];
  const hovering = (e) => {
    return (
      <div className={style.mouseover_member}>
        {members[0].email} <br></br>
        {members[0].phone}
        <br></br>
        <div className={style.mouseover_member_social}>
          <div>
            <FaFacebookSquare />
          </div>
          <div>
            <FaInstagramSquare />
          </div>
          <div>
            <FaLinkedin />
          </div>
        </div>
      </div>
    );
  };
  return (
    <div
      className={style.member}
      onMouseEnter={() => setishover(true)}
      onMouseLeave={() => setishover(false)}
    >
      {ishover ? (
        hovering(Event)
      ) : (
        <>
          <div className={style.member_image}>
            <img src={pradeep} alt="" />
          </div>
          <div className={style.member_desc}>
            My name is khan and i am not a terrorist Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Magni expedita amet deserunt vero
            excepturi nulla vitae ullam dolore totam molestias repellat
            quibusdam blanditiis eaque doloremque, nemo, enim, accusantium autem
            sit.
          </div>
          <div className={style.member_name}>
            {props.name} / <span> {props.post}</span>
          </div>
        </>
      )}
    </div>
  );
}
