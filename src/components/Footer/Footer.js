import React from "react";
import { Container } from "@material-ui/core";
import style from "./Footer.module.scss";
import Logo from "./../common/logo/Logo";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <Container>
      <footer>
        <div className={style.logo}>
          <Logo />
        </div>
        <div className={style.extra}>
          <div className={style.social}>
            <a href="https://www.facebook.com/mayanmedianepal/">
              <FaFacebookF />
            </a>
          </div>
          {/* <div className={style.social}>
            <a href="https://www.facebook.com/mayanmedianepal/">
              <FaTwitter />
            </a>
          </div> */}
          <div className={style.social}>
            <a href="https://www.instagram.com/mayanmedianepal/">
              <FaInstagram />
            </a>
          </div>
          <div className={style.social}>
            <a href="https://www.youtube.com/channel/UCmPTP4ZPUiHcbIQy3k5e-Pw">
              <FaYoutube />
            </a>
          </div>
        </div>
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
