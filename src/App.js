import React, { useEffect, useState } from "react";
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
import Multimedia from "./components/Projects/Multimedia/Multimedia";
import Graphic from "./components/Projects/Graphic/Graphic";
import Projects from "./components/Projects/Projects";
import { ImCross } from "react-icons/im";
import Applicants from "./components/Applicants/Applicants";

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

function onSubmit(e) {
  e.preventDefault();
  alert("submitted");
}

function App() {
  const [popup, setPopup] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    expectation: "",
    knowus: "",
    duration: "",
  });

  const {
    name,
    email,
    phone,
    address,
    expectation,
    knowus,
    duration,
  } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  function popupfn() {
    return (
      <modal className={style.popup}>
        <div className={style.popup_content}>
          <form>
            <div className={style.cross} onClick={() => setPopup(false)}>
              <ImCross />
            </div>

            <h1>
              Register for our course <span>{/* <FiMail /> */}</span>
            </h1>
            <input
              className="element"
              type="text"
              name="name"
              required
              value={name}
              onChange={onchange}
              placeholder="Name"
            />

            <input
              required
              className="element"
              type="email"
              name="email"
              value={email}
              onChange={onChange}
              placeholder="Email Address"
            />
            <input
              required
              id="contactno"
              className="element"
              type="text"
              name="phone"
              placeholder="Contact Number"
              value={phone}
              onChange={onChange}
            />
            <input
              required
              className="element"
              type="text"
              name="address"
              value={address}
              onChange={onChange}
              placeholder="Address"
            />
            <input
              required
              id="expectation"
              className="element"
              name="expectation"
              type="text"
              placeholder="Expectation from the course"
              value={expectation}
              onChange={onChange}
            />
            <input
              required
              id="knowus"
              className="element"
              name="knowus"
              type="text"
              placeholder="How did you know about us"
              value={knowus}
              onChange={onChange}
            />
            <input
              required
              id="duration"
              className="element"
              name="duration"
              type="text"
              placeholder="What is your optimal duration for the course"
              value={duration}
              onChange={onChange}
            />

            <input
              type="button"
              name="submit"
              value="Submit →"
              onClick={onSubmit}
            />
          </form>
        </div>
      </modal>
    );
  }

  function banner() {
    return (
      <div className={style.banner} onClick={() => setPopup(true)}>
        <div className={style.banner_content}>Register for our course</div>
      </div>
    );
  }

  return (
    <>
      <body>
        {popup ? popupfn() : null}
        <HashRouter>
          {/* <Fade top> */}
          {banner()}
          <Header />
          {/* </Fade> */}
          {window.innerWidth > 768 ? <Upbtn /> : null}
          <div className={style.body}>
            <Switch>
              <Route
                exact
                path="/services/:name"
                component={(props) => (
                  <Work_detail {...props} key={window.location.href} />
                )}
              />
              <Route exact path="/services" component={Work_detail} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/about" component={Aboutus} />
              <Route exact path="/projects" component={Projects} />
              <Route exact path="/applicants" component={Applicants} />
              <Route
                exact
                path="/projects/websites"
                component={(props) => (
                  <TestomonialDetail heading={"Our Works"} />
                )}
              />
              <Route exact path="/projects/multimedia" component={Multimedia} />
              <Route
                exact
                path="/projects/graphics"
                component={(props) => <Graphic />}
              />
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
