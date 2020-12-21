import React, { useState } from "react";
import style from "./MenuMobile.module.scss";
import Menu from "./Menu";
import { GiHamburgerMenu } from "react-icons/gi";

export default function MenuMobile() {
  const [burgerClicked, setburgerClicked] = useState(false);

  return (
    <>
      {burgerClicked ? null : (
        <div
          className={style.hamburger}
          onClick={() => setburgerClicked(!burgerClicked)}
        >
          <GiHamburgerMenu />
        </div>
      )}
      {burgerClicked && (
        <>
          <div
            className={style.hamburger}
            onClick={() => setburgerClicked(!burgerClicked)}
          >
            <GiHamburgerMenu />
          </div>
          <div className={style.MenuMobile}>
            {" "}
            <Menu
              setburgerClicked={setburgerClicked}
              burgerClicked={burgerClicked}
            />{" "}
          </div>
        </>
      )}
    </>
  );
}
