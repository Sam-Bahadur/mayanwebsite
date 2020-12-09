import { Container } from "@material-ui/core";
import React from "react";
import style from "./Contact.module.scss";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { FiMail } from "react-icons/fi";
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import Iframe from "react-iframe";

export default function Contact() {
  return (
    <>
      <Container>
        <div className={style.contact}>
          <div className={style.contact_main}>
            <h2>Mayan media and Consulting</h2>
            <h4>Anamnagar, Kathmandu</h4>
            <h4>+977-98xxxxxxxx</h4>
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
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="text" placeholder="Phone Number" cols="30" />
              <textarea
                name="Message"
                id=""
                cols="20"
                rows="5"
                placeholder="Message"
              ></textarea>
              <input type="button" name="submit" value="Send Message →" />
            </form>
          </div>
        </div>
        <div className={style.map}>
          <div className={style.map_text}>
            <h1>Visit Us</h1>
          </div>
          {/* <Iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14127.964629962415!2d85.34553237222899!3d27.71755929209402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5db83051fd4772de!2sTimilsina%20Store!5e0!3m2!1sen!2snp!4v1607493765586!5m2!1sen!2snp"
            width="100%"
            className={style.map_content}
            height="450"
            frameborder="0"
            style="border:0;"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></Iframe> */}
        </div>
      </Container>
    </>
  );
}
