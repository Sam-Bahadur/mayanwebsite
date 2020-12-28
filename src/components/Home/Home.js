import React from "react";
import Hero from "./../Hero/Hero";
import Slogan from "./../Slogan/Slogan";
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
      {/* <Slogan /> */}
      <Zoom>
      <Work />
      </Zoom>
      <Zoom>
      <Testomonial />
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
