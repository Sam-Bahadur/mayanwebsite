import React from "react";
import Header from "./components/Header/Header";
import style from "./App.module.scss";
import Hero from "./components/Hero/Hero";
import Slogan from "./components/Slogan/Slogan";
import Work from "./components/Work/Work";
import Team from "./components/Team/Team";
import Testomonial from "./components/Testomonial/Testomonial.js";

function App() {
  return (
    <>
      <body>
        <Header />
        <Hero />
        <Slogan />
        <Work />
        <Team />
        <Testomonial />
      </body>
    </>
  );
}

export default App;
