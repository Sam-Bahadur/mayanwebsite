import React from "react";
import Header from "./components/Header/Header";
import style from "./App.module.scss";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import { HashRouter, Route, Switch } from "react-router-dom";
import Work_detail from "./components/Work/Work_detail";
import Contact from "./components/Contact/Contact";

function UnderConstruction() {
  return (
    <>
      <h1>Page under construction</h1>
    </>
  );
}

function App() {
  return (
    <>
      <body>
        <HashRouter>
          <Header />
          <Switch>
            {/* <Route exact path="/work" component={() => <Work_detail desc={} />} /> */}
            <Route exact path="/work" component={Work_detail} />
            {/* <Route exact path="/contact" component={Contact} /> */}
            <Route exact path="/" component={Home} />
            <Route exact component={UnderConstruction} />
            {/* <Footer /> */}
          </Switch>
        </HashRouter>
      </body>
    </>
  );
}

export default App;
