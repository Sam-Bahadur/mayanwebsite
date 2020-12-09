import React from "react";
import style from "./Team.module.scss";
import { useState } from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaGithubSquare,
} from "react-icons/fa";
import pradeep from "../../assets/img/members/pradeep.jpg";
import { Link } from "react-router-dom";

export default function TeamSingle(props) {
  const [ishover, setishover] = useState(false);
  // const members = [
  //   {
  //     email: "pradipktimsina@gmail.com",
  //     phone: "+977-9843534725",
  //   },
  // ];
  const hovering = (e) => {
    return (
      <div className={style.mouseover_member}>
        {props.email} <br></br>
        {props.phone}
        <br></br>
        <div className={style.mouseover_member_social}>
          <div>
            <a href={props.fb} target="_blank" rel="noreferrer">
              <FaFacebookSquare />
            </a>
          </div>
          <div>
            <a href={props.in} target="_blank" rel="noreferrer">
              <FaInstagramSquare />
            </a>
          </div>
          <div>
            <a href={props.ln} target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
          </div>
          <div>
            <a href={props.git} target="_blank" rel="noreferrer">
              <FaGithubSquare />
            </a>
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
            <img src={props.image} alt="" />
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
