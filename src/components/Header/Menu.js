import React, { useState } from "react";
import style from "./Header.module.scss";
import Logo from "./../common/logo/Logo";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "react-dropdown/style.css";
import { Link as ScrollLink } from "react-scroll";
import { MdExpandMore, MdExpandLess } from "react-icons/md";

export default function Menu(props) {
  const [mouseOverServices, setmouseOverServices] = useState(false);
  const [mouseOverProjects, setmouseOverProjects] = useState(false);

  let history = useHistory();
  // const workClicked = () => {
  //   history.push("/");
  // };
  const projects = (
    <div className={style.services}>
      <li><Link to={{ pathname: "/projects/websites" }}>Website</Link></li>
      <li>
        <Link to={{ pathname: "/projects/graphics" }}>Graphic Designing</Link>
      </li>
      <li><Link to={{ pathname: "/projects/multimedia" }}>Multimedia</Link></li>
    </div>
  );
  const services = (
    <>
      <div className={style.services}>
        <li>
          <Link
            to={{
              pathname: `/services/1`,
              desc: 1,
            }}
          >
            Web Design and Development
          </Link>
        </li>
        <li>
          <Link
            to={{
              pathname: "/services/2",
              desc: 2,
            }}
          >
            Software Development
          </Link>
        </li>
        <li>
          <Link
            to={{
              pathname: "/services/3",
              desc: 3,
            }}
          >
            Mobile App development
          </Link>
        </li>
        <li>
          <Link
            to={{
              pathname: "/services/4",
              desc: 4,
            }}
          >
            Graphic Designing
          </Link>
        </li>
        <li>
          <Link
            to={{
              pathname: "/services/5",
              desc: 5,
            }}
          >
            Social Media Marketing
          </Link>
        </li>
        <li>
          <Link
            to={{
              pathname: "/services/6",
              desc: 6,
            }}
          >
            Videography
          </Link>
        </li>
        <li>
          <Link
            to={{
              pathname: "/services/7",
              desc: 7,
            }}
          >
            Photography
          </Link>
        </li>
        <li>
          <Link
            to={{
              pathname: "/services/8",
              desc: 8,
            }}
          >
            SEO & Website maintenance
          </Link>
        </li>
        <li>
          <Link
            to={{
              pathname: "/services/9",
              desc: 9,
            }}
          >
            E-commerce systems
          </Link>
        </li>
      </div>
    </>
  );
  return (
    <div className={style.appbar}>
      <Link to ="/">
      <Logo />
      </Link>
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
        <div
          className={style.nav_item}
          onMouseEnter={() => setmouseOverServices(true)}
          onMouseLeave={() => setmouseOverServices(false)}
        >
          <Link
            to="/services"
            onClick={() =>
              props.setburgerClicked ? props.setburgerClicked(false) : null
            }
          >
            Services {mouseOverServices ? <MdExpandLess /> : <MdExpandMore />}
            {mouseOverServices
              ? services
              : null}
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
            onMouseEnter={() => setmouseOverProjects(true)}
            onMouseLeave={() => setmouseOverProjects(false)}
          >
            Projects{mouseOverProjects ? <MdExpandLess /> : <MdExpandMore />}
            {mouseOverProjects ? projects : null}
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
