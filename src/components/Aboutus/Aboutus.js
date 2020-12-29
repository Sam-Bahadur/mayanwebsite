import React, { useLayoutEffect } from "react";
import { Container } from "@material-ui/core";
import style from "./Aboutus.module.scss";

export default function Aboutus() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <Container>
      {console.log(window.location.href)}
      <aboutus>
        <div className={style.para}>
          <p>
            Mayan is a cutting-edge millennial Media and IT Consulting company
            founded by young technology enthusiasts of Nepal. At Mayan, our
            mission is to be your one stop solution for all your media and IT
            needs while we simultaneously help revolutionize the current
            landscape of Nepali media and IT industry.
          </p>
          <p>
            With the exponentially growing presence of Information and
            Technology in our daily lives, it is clear that Nepali business
            conglomerates, Small and Medium sized Enterprises (SMEs) to general
            Nepali citizens; all must become technologically adept and adapt to
            this new revolution in order to prosper in the 21st century. At
            Mayan, we believe that the digital medium is going to be the primary
            medium for the exchange of ideas, concepts, data and other services
            worldwide and Nepal should be neck to neck relative to other
            nations. Thus, our major objective is to help Nepali individuals,
            companies and institutions to make Nepal a technologically savvy
            country in order to keep up with the rest of the world.
          </p>{" "}
          <p>
            Our board is composed of a diverse group of young professionals from
            different backgrounds ranging from economists to engineers to
            artists. Additionally, our employees are exceptional in their
            respective technical fields of web designing and development, app
            designing and development and graphic designing. We believe our
            diverse yet diligent, industrious and conscientious core-team is our
            major asset that will allow Mayan to revolutionize the Media and IT
            sector of Nepal.
          </p>
          <p>
            The world is heading towards a digital era and we at Mayan promise
            to be your ally for transitioning into this new age.
          </p>
        </div>
      </aboutus>
    </Container>
  );
}
