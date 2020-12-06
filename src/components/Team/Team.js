import React from "react";
import style from "./Team.module.scss";
import { Container } from "@material-ui/core";
import pradeep from "../../assets/img/members/pradeep.jpg";

export default function Team() {
  return (
    <Container>
      <team>
        <div className={style.team_top}>Our Team</div>
        <div className={style.team}>
          <div className={style.member}>
            <div className={style.member_image}>
              <img src={pradeep} alt="" />
            </div>
            <div className={style.member_desc}>
              My name is khan and i am not a terrorist
            </div>
            <div className={style.member_name}>Pradeep</div>
          </div>
          <div className={style.member}>
            <div className={style.member_image}>
              <img src={pradeep} alt="" />
            </div>
            <div className={style.member_desc}>
              My name is khan and i am not a terrorist
            </div>
            <div className={style.member_name}>Pradeep</div>
          </div>
          <div className={style.member}>
            <div className={style.member_image}>
              <img src={pradeep} alt="" />
            </div>
            <div className={style.member_desc}>
              My name is khan and i am not a terrorist Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Corporis, omnis sunt cum itaque
              et accusantium libero dignissimos odit assumenda placeat!
            </div>
            <div className={style.member_name}>Pradeep</div>
          </div>
        </div>
      </team>
    </Container>
  );
}
