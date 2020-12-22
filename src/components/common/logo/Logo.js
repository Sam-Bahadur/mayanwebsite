import React from "react";
import logo from "../../../assets/img/logomayan.png";

export default function Logo() {
  const style = {
    logo: {
      width: "100px",
      maxHeight: "100px",
    },
  };
  return (
    <>
      <img style={style.logo} src={logo} alt="Mayan media logo" />
    </>
  );
}
