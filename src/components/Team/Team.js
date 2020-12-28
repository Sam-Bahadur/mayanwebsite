import React from "react";
import style from "./Team.module.scss";
import { Container } from "@material-ui/core";
import TeamSingle from "./TeamSingle";
import pradeep from "../../assets/img/members/pradeep.jpg";
import yuyutsu from "../../assets/img/members/yuyutsu.jpg";
import aabhushan from "../../assets/img/members/aabhushan.jpg";
import bhibhushan from "../../assets/img/members/bhibhushan.jpg";
import anish from "../../assets/img/members/anish.jpg";
import Zoom from "react-reveal/Zoom"

export default function Team(props) {
  return (
    <Container>
      <team>
        <div className={style.team_top}>Our Team</div>
        <div className={style.team}>

          <TeamSingle
            name={"Aabhusan Khadka"}
            phone={"+977-9841469812"}
            post={"Managing Director & UX designer"}
            email={"aabhusan@mayanmedia.com.np"}
            key={2}
            image={aabhushan}
            desc={
              "Aabhusan is one of the founding directors of Mayan. He completed his BA with a specialization in Mathematical Economics from Colorado College and worked as the Innovation paraprofessional at the Innovation department of Colorado College upon graduating. After living in the US for a little over 7 years, he decided to come back to his home-country with the desire to contribute to his nation. He is currently a research officer at Digo Bikash Institute. A knowledge seeker by nature, a researcher by profession and a visual and user experience designer by passion; Khadka is one of the essential creative brains behind the exceptional works produced by Mayan. "
            }
            />
          <TeamSingle
            name={"Yuyutsu Karki"}
            phone={"+977-9843663478"}
            post={"Marketing and SEO"}
            email={"yuyutsucarkey@gmail.com"}
            key={3}
            image={yuyutsu}
            desc={
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, mollitia. Voluptate ex ipsam eum voluptas, quos officia odio dolores sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore provident culpa accusantium velit minima consequuntur, quo ad omnis, sequi porro, eligendi mollitia voluptas ipsum voluptatibus repellendus vero unde! Sapiente officia minus ratione, at corporis eveniet voluptas necessitatibus velit ut? Praesentium vitae est sunt enim repellendus! Sint eius voluptatem, quo eligendi libero magni modi rem ratione provident distinctio quia aliquid facilis officiis ipsam voluptatibus suscipit expedita quaerat aperiam repudiandae vero est quasi quidem! Ut sequi quisquam at, exercitationem nam nulla, nisi corporis, numquam asperiores dolores officiis natus quae! Enim voluptatum nostrum quod similique suscipit, consequatur iusto voluptatibus quaerat exercitationem, veritatis nulla!"
            }
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
            desc={
              "Pradeep K. Timsina is a software developer who specializes on web development. He completed his bachelors degree on computer Engineering From Himalaya College of Engineering(TU) on 2019 and is now working as the developer for Mayan Media and IT consulting team."
            }
          />
          <TeamSingle
            name={"Bibhusan Jung Sijapati"}
            phone={"+977-9843534725"}
            post={"Graphic Designer"}
            key={4}
            email={"bibhusijapati@gmail.com"}
            fb={"http://www.fb.com/openmyacc"}
            in={"http://www.instagram.com"}
            ln={"https://www.linkedin.com/in/pradip-k-timsina-1b4134176/"}
            git={"https://github.com/Sam-Bahadur"}
            image={bhibhushan}
            desc={
              "Bibhushan is an Art and Technology enthusiast who is currently studying Bachelors in Information Management (BIM). He is an excellent Graphic Designer and our in-house SEO expert with a great track record.His research methods and analytical skills are his greatest strengths which he utilizes to fulfill our client’s expectations. On a personal level, Bibhushan is naturally a creative individual and he employs this quality to all of his works. "
            }
          />
          <TeamSingle
            name={"Anish Niroula"}
            phone={"+977-9843534725"}
            post={"HR Department"}
            key={5}
            email={"anishniroula@gmail.com"}
            fb={"http://www.fb.com/openmyacc"}
            in={"http://www.instagram.com"}
            ln={"https://www.linkedin.com/in/pradip-k-timsina-1b4134176/"}
            git={"https://github.com/Sam-Bahadur"}
            image={anish}
            desc={
              " dolor, sit amet consectetur adipisicing elit. Quas, mollitia. Voluptate ex ipsam eum voluptas, quos officia odio dolores sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore provident culpa accusantium velit minima consequuntur, quo ad omnis, sequi porro, eligendi mollitia voluptas ipsum voluptatibus repellendus vero unde! Sapiente officia minus ratione, at corporis eveniet voluptas necessitatibus velit ut? Praesentium vitae est sunt enim repellendus! Sint eius voluptatem, quo eligendi libero magni modi rem ratione provident distinctio quia aliquid facilis officiis ipsam voluptatibus suscipit expedita quaerat aperiam repudiandae vero est quasi quidem! Ut sequi quisquam at, exercitationem nam nulla, nisi corporis, numquam asperiores dolores officiis natus quae! Enim voluptatum nostrum quod similique suscipit, consequatur iusto voluptatibus quaerat exercitationem, veritatis nulla!"
            }
          />
        </div>
      </team>
    </Container>
  );
}
