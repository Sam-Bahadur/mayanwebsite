import React from "react";
import Hero from "./../Hero/Hero";
import Slogan from "./../Slogan/Slogan";
import Work from "./../Work/Work";
import Testomonial from "./../Testomonial/Testomonial";
import Team from "./../Team/Team";
import Contact from "../Contact/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Slogan />
      <Work />
      <Testomonial />
      <Team />
      <Contact />
    </>
  );
}
