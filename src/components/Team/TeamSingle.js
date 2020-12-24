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
import { FiMail, FiPhone } from "react-icons/fi";
import { IoIosAddCircle } from "react-icons/io";
import { useHistory } from "react-router-dom";
import TeamDetail from "./TeamDetail";

export default function TeamSingle(props) {
  const { name, desc, image, email, fb, post } = props;
  const readmoreClicked = () => {
    history.push({
      pathname: `team/${props.name}`,
      name,
      desc,
      image,
      email,
      fb,
      post,
    });
  };
  TeamSingle.defaultProps = {
    desc:
      "My name is khan and i am not a terrorist Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni expedita amet deserunt vero excepturi nulla vitae ullam dolore totam molestias repellat    quibusdam blanditiis eaque doloremque, nemo, enim, accusantium autem sit.",
  };
  let history = useHistory();
  return (
    <div className={style.member}>
      <>
        <div className={style.member_image}>
          <img src={props.image} alt="" />
        </div>
        <div className={style.member_desc}>
          {props.desc.slice(0, 280)}...
          <span onClick={readmoreClicked}>
            <IoIosAddCircle />
          </span>
        </div>

        <>
          <div className={style.mouseover_member}>
            <div className={style.info}>
              <FiMail />
              {props.email}
            </div>
            <div className={style.info}>
              <FiPhone />
              {props.phone}
            </div>
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
              {props.git ? (
                <div>
                  <a href={props.git} target="_blank" rel="noreferrer">
                    <FaGithubSquare />
                  </a>
                </div>
              ) : null}
            </div>
          </div>
        </>
        <div className={style.member_name}>
          {props.name} / <span> {props.post}</span>
        </div>
      </>
    </div>
  );
}
