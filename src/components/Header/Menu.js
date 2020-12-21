import React from "react";
import style from "./Header.module.scss";
import Logo from "./../common/logo/Logo";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

export default function Menu(props) {
  let history = useHistory();
  const workClicked = () => {
    history.push("/");
  };
  return (
    <div className={style.appbar}>
      <Logo />
      <div className={style.navlist}>
        <div className={style.nav_item}>
          <Link
            to="/"
            onClick={() =>
              props.setburgerClicked ? props.setburgerClicked(false) : null
            }
          >
            Home
          </Link>
        </div>
        <div className={style.nav_item}>
          <Link
            to="/services"
            onClick={() =>
              props.setburgerClicked ? props.setburgerClicked(false) : null
            }
          >
            Services
          </Link>
        </div>
        <div className={style.nav_item}>
          <Link
            to="/about"
            onClick={() =>
              props.setburgerClicked ? props.setburgerClicked(false) : null
            }
          >
            About Us
          </Link>
        </div>
        <div className={style.nav_item}>
          <Link
            to="/projects"
            onClick={() =>
              props.setburgerClicked ? props.setburgerClicked(false) : null
            }
          >
            Projects
          </Link>
        </div>
        <div className={style.nav_item}>
          <Link
            to="/contact"
            onClick={() =>
              props.setburgerClicked ? props.setburgerClicked(false) : null
            }
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
