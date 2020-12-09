import React from "react";
import { Container } from "@material-ui/core";
import style from "./Footer.module.scss";
import Logo from "./../common/logo/Logo";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <Container>
      <footer>
        <div className={style.logo}>
          <Logo />
        </div>
        <div className={style.extra}>
          <div className={style.social}>
            <FaFacebookF />
          </div>
          <div className={style.social}>
            <FaTwitter />
          </div>
          <div className={style.social}>
            <FaInstagram />
          </div>
          <div className={style.social}>
            <FaYoutube />
          </div>
        </div>
      </footer>
      <end_footer>
        <li>About us</li>
        <li>Contact</li>
        <li>Support</li>
      </end_footer>
    </Container>
  );
}
