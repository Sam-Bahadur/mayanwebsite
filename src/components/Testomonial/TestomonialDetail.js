import React from "react";
import { Container } from "@material-ui/core";
import scroll2 from "../../assets/img/pages/full_page2.png";
import scroll3 from "../../assets/img/pages/full_page3.png";
import scroll4 from "../../assets/img/pages/full_page4.png";
import Work_image from "./../Work/Work_image";
import style from "./Testomonial.module.scss";

export default function TestomonialDetail(props) {
  return (
    <Container>
      <h1>{props.heading}</h1>
      <testomonial>
        {" "}
        <div
          className={style.testomonials}
          style={{
            gridTemplateColumns: "unset",
            width: "80%",
            margin: "0 auto",
          }}
        >
          <div className={style.wrapper}>
            <div className={style.testomonial}>
              <Work_image
                link={"http://www.sharmilakarki.com"}
                image={scroll2}
                height={"50vh"}
              />
              <div
                className={style.testomonial_desc}
                style={{
                  fontSize: "1rem",
                }}
              >
                <div className={style.desc_title}>Testomonial</div>
                Working with Mayan media has been a wonderful experience for me.
                The team of Mayan are energetic nepali youths who are well
                groomed professionals in my opinion. The team presented me with
                innovative as well as creative ideas for my personal website and
                delivered a final product that was well beyond my expectation.
                The team has proved to be hard working and easy to work with
                while delivering their services with exemplary quality within
                the fixed deadline. I would highly recommend others to hire
                Mayan media for their IT and media requirements!
              </div>
              <div className={style.testomonial_name}>
                Sharmila Karki /{" "}
                <a
                  href="http://www.sharmilakarki.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>www.sharmilakarki.com</span>
                </a>
              </div>
            </div>
          </div>
          <div className={style.wrapper}>
            <div className={style.testomonial}>
              <Work_image
                image={scroll3}
                link={"http://www.jagaran-nepal.org.np"}
                height={"50vh"}
              />
              <div className={style.testomonial_desc}>
                <div className={style.desc_title}>Testomonial</div>
                Our partnership with Mayan media has been tremendously fruitful.
                Mayan is definitely a one stop solution for all the media and IT
                needs as they claim to be. In terms of IT services, we worked
                with mayan media to design and develop a blog website. We also
                collaborated with Mayan media to run a workshop on digital
                security training. Mayan’s services for our media needs were
                also reliable as well as exceptional. We collaborated with
                Mayan’s videographers to plan, shoot and edit a short
                documentary about dignified menstruation in Accham and they also
                helped us create a radio jingle about dignified menstruation
                that was played in the popular radio frequencies in Nepal. To
                sum up, our working relationship with mayan media has been
                exceptional and we look forward to working with them again in
                the future.
              </div>
              <div className={style.testomonial_name}>
                Jagaran Nepal /{" "}
                <a
                  href="http://www.jagaran-nepal.org.np"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>www.jagaran-nepal.org.np</span>
                </a>
              </div>
            </div>
          </div>
          <div className={style.wrapper}>
            <div className={style.testomonial}>
              <Work_image
                image={scroll4}
                height={"50vh"}
                link={"http://www.jagaran-nepal.org.np"}
              />
              <div className={style.testomonial_desc}>
                <div className={style.desc_title}>Testomonial</div>
                SAMABIKAS Nepal is very happy and content with Mayan Media for
                their service. What we liked most about them is their
                punctuality and importance to the details. We fully trust Mayan
                Media as they will do what is needed to be done to satisfy their
                customer needs. It was a pleasure working with young
                professionals who are reliable and intelligent. Our new website
                is easy to work with, has new features and looks very trendy. We
                are glad to find an IT consultant like Mayan Media!
              </div>
              <div className={style.testomonial_name}>
                Jagaran Nepal /{" "}
                <a
                  href="https://samabikas.org.np/#/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>www.samabikas.org.np</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </testomonial>
    </Container>
  );
}
