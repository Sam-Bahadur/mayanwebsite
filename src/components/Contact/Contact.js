import { Container } from "@material-ui/core";
import React, { useState } from "react";
import style from "./Contact.module.scss";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { FiMail } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import axios from "axios";
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import Iframe from "react-iframe";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const { email, name, message, phone } = formData;
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    alert("press ok and wait a few seconds...");
    const response = await axios.post(
      `https://nodemailermayan.herokuapp.com/sendemail`,
      {
        name,
        email,
        phone,
        message,
      }
    );
    console.log(response);
    alert("message sent successfully");
    window.location = "#";
  };
  return (
    <>
      <Container>
        <div className={style.contact}>
          <div className={style.contact_main}>
            <h2>Mayan media and Consulting</h2>
            <h4>
              <GoLocation />
              Anamnagar, Kathmandu
            </h4>
            <h4>
              <FiPhone />
              +977-9841469812, +977-9843663478
            </h4>
            <div className={style.contact_social}>
              <div>
                <a href="http://">
                  <FaFacebookSquare />
                </a>
              </div>
              <div>
                <a href="http://">
                  <FaInstagram />
                </a>
              </div>
              <div>
                <a href="http://">
                  <FaLinkedin />
                </a>
              </div>
              <div>
                <a href="http://">
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>
          <div className={style.form}>
            <form noValidate autoComplete="off">
              <h1>
                Get in touch{" "}
                <span>
                  <FiMail />
                </span>
              </h1>
              <input
                className="element"
                type="text"
                name="name"
                value={name}
                onChange={onChange}
                placeholder="Name"
              />
              <input
                className="element"
                type="email"
                name="email"
                value={email}
                onChange={onChange}
                placeholder="Email Address"
              />
              <input
                id="contactno"
                className="element"
                type="text"
                name="phone"
                value={phone}
                onChange={onChange}
                placeholder="Contact Number"
              />
              <textArea
                type="text"
                name="message"
                value={message}
                onChange={onChange}
                placeholder="Message Here"
                rows="5"
                cols="30"
              />
              <input
                type="button"
                name="submit"
                value="Send Message →"
                onClick={onSubmit}
              />
            </form>
          </div>
        </div>
        <div className={style.map}>
          <div className={style.map_text}>
            <h1>Visit Us</h1>
          </div>
          <Iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.7407617789127!2d85.33102698583453!3d27.694406156829285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe958e4fbbefbfc50!2sMadan%20Bhandari%20Memorial%20College!5e0!3m2!1sen!2snp!4v1608613503994!5m2!1sen!2snp"
            width="100%"
            className={style.map_content}
            height="300"
            frameborder="0"
            style="border:0;"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          />
        </div>
      </Container>
    </>
  );
}
