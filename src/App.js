import React from "react";
import Header from "./components/Header/Header";
import style from "./App.module.scss";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import { HashRouter, Route, Switch } from "react-router-dom";
import Work_detail from "./components/Work/Work_detail";
import Contact from "./components/Contact/Contact";
import construction from "./assets/img/construction.png";
import { Container } from "@material-ui/core";
import Aboutus from "./components/Aboutus/Aboutus";
import Upbtn from "./components/common/Upbtn/Upbtn";
import TestomonialDetail from "./components/Testomonial/TestomonialDetail";
import TeamDetail from "./components/Team/TeamDetail";
import Multimedia from "./components/Projects/Multimedia/Multimedia"
import Graphic from "./components/Projects/Graphic/Graphic"

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
          {/* <Fade top> */}
          <Header />
          {/* </Fade> */}
          {window.innerWidth > 768 ? <Upbtn /> : null}
          <div className={style.body}>
            <Switch>
              <Route exact path="/services" component={Work_detail} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/about" component={Aboutus} />
              <Route exact path="/projects/websites" component={TestomonialDetail} />
              <Route exact path="/projects/multimedia" component={Multimedia} />
              <Route exact path="/projects/graphics" component={Graphic} />
              <Route exact path="/team/:name" component={TeamDetail} />
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
