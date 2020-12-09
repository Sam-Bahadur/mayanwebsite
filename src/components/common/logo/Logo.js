import React from "react";
import logo from "../../../assets/img/logomayan.png";

export default function Logo() {
  const style = {
    logo: {
      width: "80px",
    },
  };
  return (
    <>
      <img style={style.logo} src={logo} alt="Mayan media logo" />
    </>
  );
}
