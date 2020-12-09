import React from "react";
import style from "./Team.module.scss";
import { Container } from "@material-ui/core";
import TeamSingle from "./TeamSingle";
import pradeep from "../../assets/img/members/pradeep.jpg";
import yuyutsu from "../../assets/img/members/yuyutsu.jpg";
import aabhushan from "../../assets/img/members/aabhushan.jpg";

export default function Team(props) {
  return (
    <Container>
      <team>
        <div className={style.team_top}>Our Team</div>
        <div className={style.team}>
          <TeamSingle
            name={"Aabhusan Khadka"}
            phone={"+977-9843534725"}
            post={"SEO and UI/UX expert"}
            email={"pradipktimsina@gmail.com"}
            key={2}
            image={aabhushan}
          />
          <TeamSingle
            name={"Yuyutsu Karki"}
            phone={"+977-9843534725"}
            post={"Marketing and SEO"}
            email={"pradipktimsina@gmail.com"}
            key={3}
            image={yuyutsu}
          />
          <TeamSingle
            name={"pradeep Timsina"}
            phone={"+977-9843534725"}
            post={"Web Developer"}
            key={1}
            email={"pradipktimsina@gmail.com"}
            fb={"http://www.fb.com/openmyacc"}
            in={"http://www.instagram.com"}
            ln={"https://www.linkedin.com/in/pradip-k-timsina-1b4134176/"}
            git={"https://github.com/Sam-Bahadur"}
            image={pradeep}
          />
        </div>
      </team>
    </Container>
  );
}
