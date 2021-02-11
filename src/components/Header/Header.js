import style from "./Header.module.scss";
import React, { useState, useLayoutEffect } from "react";
import Container from "@material-ui/core/Container";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
// import logo from "../../assets/img/logomayan.png";
import Menu from "./Menu";
import MenuMobile from "./MenuMobile";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import Dividor from "../common/Dividor/Dividor";
import Social from "../common/Social/Social";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#000",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});

// function HideOnScroll(props) {
//   const { children, window } = props;
//   const trigger = useScrollTrigger({ target: window ? window() : undefined });

//   return (
//     <Slide appear={false} direction="down" in={!trigger}>
//       {children}
//     </Slide>
//   );
// }
function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}

export default function Header() {
  const [width, height] = useWindowSize();
  return (
    <Container>
      <header id={"header"}>
        <div className={style.extra_info}>
          <div>
            <span>
              <FiPhoneCall />
            </span>
            <h2>9841469812, 9843663478</h2>
          </div>
          <div>
            <span>
              <AiOutlineMail />
            </span>
            <h2>info@mayanmedia.com.np</h2>
          </div>
          <div>
            <span>
              <GoLocation />
            </span>
            <h2>Anamnagar, Kathmandu</h2>
          </div>
          <div>
          <a target="_blank" rel="noreferrer" href="https://www.facebook.com/mayanmedianepal/">
              <FaFacebookF />
            </a>
          <a target="_blank" rel="noreferrer" href="https://www.instagram.com/mayanmedianepal/">
              <FaInstagram />
            </a>
          <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCmPTP4ZPUiHcbIQy3k5e-Pw">
              <FaYoutube />
            </a>
          </div>
        </div>
        <Dividor />
        {/* <CssBaseline /> */}
        {/* <HideOnScroll>
          <ThemeProvider theme={theme}>
            <AppBar>
              <Toolbar>
                <Typography variant="h6">Logo Here</Typography>
                <div className={style.appbar}>
                  <Typography variant="h5">Home</Typography>
                  <Typography variant="h5">About</Typography>
                  <Typography variant="h5">Projects</Typography>
                  <Typography variant="h5">Contact Us</Typography>
                </div>
              </Toolbar>
            </AppBar>
          </ThemeProvider>
        </HideOnScroll>
        <Toolbar />
        <div className={style.extra_info}>
          <h6>+977-9843534725</h6>
        </div> */}
        {width > 768 ? <Menu /> : <MenuMobile />}
      </header>
    </Container>
  );
}
