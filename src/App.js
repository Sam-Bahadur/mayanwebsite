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
import axios from "axios";

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
  const [popup, setPopup] = useState(true);

  const [formData, setFormData] = useState({
    first_name: "",
    middle_name: "",
    last_name: "",
    email: "",
    contact: "",
    address: "",
    motivation: "motivation",
    expectation: "",
    recognition_source: "",
    course_duration_feasibility: "2 weeks",
  });
  function onSubmit(e) {
    e.preventDefault();
    console.log(formData);
    setPopup(false);
    // const response = axios;
    axios
      .post("https://api.sathinewyork.com/mayan/api/academy/applicants/", {
        ...formData,
        test: true,
      })
      .then((response) => console.log(response));
    setFormData({
      first_name: "",
      middle_name: "",
      last_name: "",
      email: "",
      contact: "",
      address: "",
      motivation: "motivation",
      expectation: "",
      recognition_source: "",
      course_duration_feasibility: "2 weeks",
    });
  }
  const {
    first_name,
    middle_name,
    last_name,
    email,
    contact,
    address,
    motivation,
    expectation,
    recognition_source,
    course_duration_feasibility,
  } = formData;
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  function popupfn() {
    return (
      <modal className={style.popup}>
        <div className={style.popup_content}>
          <form onSubmit={onSubmit}>
            <div className={style.cross} onClick={() => setPopup(false)}>
              <ImCross />
            </div>
            <h1>
              Register for our course <span>{/* <FiMail /> */}</span>
            </h1>
            <label>First Name *</label>
            <input
              required
              className="element"
              type="text"
              name="first_name"
              value={first_name}
              onChange={onChange}
            />
            <label>Middle Name</label>
            <input
              className="element"
              type="text"
              name="middle_name"
              value={middle_name}
              onChange={onChange}
            />
            <label>Last Name *</label>
            <input
              className="element"
              type="text"
              name="last_name"
              value={last_name}
              onChange={onChange}
              required
            />
            <label>Email *</label>
            <input
              className="element"
              type="email"
              name="email"
              value={email}
              onChange={onChange}
              required
            />
            <label>contact Number *</label>
            <input
              id="contactno"
              className="element"
              type="text"
              name="contact"
              value={contact}
              onChange={onChange}
              required
            />
            <label>Address</label>
            <input
              className="element"
              type="text"
              name="address"
              value={address}
              onChange={onChange}
            />
            <label>Expectation from the course</label>
            <textarea
              id="expectation"
              className="element"
              name="expectation"
              type="text"
              value={expectation}
              onChange={onChange}
            />
            <label>How did you know about us</label>
            <textarea
              id="recognition_source"
              className="element"
              name="recognition_source"
              type="text"
              value={recognition_source}
              onChange={onChange}
            />
            <label>What is your optimal duration for the course</label>
            <select
              name="course_duration_feasibility"
              id="course_duration_feasibility"
              value={course_duration_feasibility}
              onChange={onChange}
            >
              <option value="2 weeks">Two weeks</option>
              <option value="3 weeeks">Three weeks</option>
              <option value="1 month">One month</option>
              <option value="2 months">Two months</option>
            </select>
            <button type="submit" name="submit">
              Submit →
            </button>
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
