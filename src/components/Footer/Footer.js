import React from "react";
import { Container } from "@material-ui/core";
import style from "./Footer.module.scss";
import Logo from "./../common/logo/Logo";
import { Link } from "react-router-dom";
import Social from "../common/Social/Social"

export default function Footer() {
  return (
    <Container>
      <footer>
        <div className={style.logo}>
          <Logo />
        </div>
        <Social />
      </footer>
      <end_footer>
        <li>
          <Link to="/about">About us</Link>
        </li>
        <li>
          <Link to="contact">Contact</Link>
        </li>
      </end_footer>
    </Container>
  );
}
