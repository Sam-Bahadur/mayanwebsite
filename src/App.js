import React from "react";
import Header from "./components/Header/Header";
import style from "./App.module.scss";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import { HashRouter, Route, Switch } from "react-router-dom";
import Work_detail from "./components/Work/Work_detail";
import Work from "./components/Work/Work";
import Contact from "./components/Contact/Contact";
import construction from "./assets/img/construction.png";
import { Container } from "@material-ui/core";
import Aboutus from "./components/Aboutus/Aboutus";
import Upbtn from "./components/common/Upbtn/Upbtn";
import Testomonial from "./components/Testomonial/Testomonial";
import TestomonialDetail from "./components/Testomonial/TestomonialDetail";

function UnderConstruction() {
  return (
    <>
      <Container>
        <div className={style.construction}>
          <img src={construction} alt="" />
        </div>
        <h1>404! Page not Found</h1>
      </Container>
    </>
  );
}

function App() {
  return (
    <>
      <body>
        <HashRouter>
          <Header />
          {window.innerWidth > 768 ? <Upbtn /> : null}
          <div className={style.body}>
            <Switch>
              {/* <Route exact path="/work" component={() => <Work_detail desc={} />} /> */}
              <Route exact path="/services" component={Work_detail} />
              <Route exact path="/projects" component={TestomonialDetail} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/about" component={Aboutus} />
              <Route exact path="/" component={Home} />
              <Route exact component={UnderConstruction} />
            </Switch>
          </div>
          <Footer />
        </HashRouter>
      </body>
    </>
  );
}

export default App;
