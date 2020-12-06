import React from "react";
import style from "./Team.module.scss";
import { Container } from "@material-ui/core";
import TeamSingle from "./TeamSingle";

export default function Team(props) {
  return (
    <Container>
      <team>
        <div className={style.team_top}>Our Team</div>
        <div className={style.team}>
          <TeamSingle
            name={"pradeep"}
            phone={"+977-9843534725"}
            post={"Web Developer"}
            key={1}
          />
          <TeamSingle
            name={"Madhu"}
            phone={"+977-9843534725"}
            post={"Peon"}
            key={2}
          />
          <TeamSingle
            name={"prakhyat"}
            phone={"+977-9843534725"}
            post={"Peon"}
            key={3}
          />
        </div>
      </team>
    </Container>
  );
}
