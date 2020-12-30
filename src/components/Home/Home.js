import React from "react";
import Hero from "./../Hero/Hero";
import Work from "./../Work/Work";
import Testomonial from "./../Testomonial/Testomonial";
import Team from "./../Team/Team";
import Contact from "../Contact/Contact";
import Zoom from "react-reveal/Zoom";

export default function Home() {
  return (
    <>
      <Zoom>
      <Hero />
      </Zoom>
      <Zoom>
      <Work />
      </Zoom>
      <Zoom>
      <Testomonial heading={"Our Work"}/>
      </Zoom>
      <Zoom>
      <Team />
      </Zoom>
      <Zoom>
      <Contact />
      </Zoom>
    </>
  );
}
