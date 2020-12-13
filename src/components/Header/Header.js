import style from "./Header.module.scss";
import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Slide from "@material-ui/core/Slide";
import Button from "@material-ui/core/Button";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
// import logo from "../../assets/img/logomayan.png";
import Logo from "./../common/logo/Logo";
import { Link } from "react-router-dom";

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

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function Header() {
  return (
    <Container>
      <header>
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
        <div className={style.appbar}>
          {/* <img src={logo} alt="" srcset="" /> */}
          <Logo />
          <div className={style.navlist}>
            <div className={style.nav_item}>
              <Link to="/">Home</Link>
            </div>
            <div className={style.nav_item}>About Us</div>
            <div className={style.nav_item}>Projects</div>
            <div className={style.nav_item}>
              <Link to="/contact">Contact</Link>
            </div>
          </div>
        </div>
        <div className={style.extra_info}>
          +977-9843534725 &nbsp; &nbsp; &nbsp; &nbsp; info@mayanmedia.com
        </div>
      </header>
    </Container>
  );
}
