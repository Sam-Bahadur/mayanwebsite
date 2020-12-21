import React, { useState } from "react";
import style from "./Work.module.scss";
import { Container } from "@material-ui/core";
import { BiCodeAlt } from "react-icons/bi";
import { DiCodeigniter } from "react-icons/di";
import { SiVisualstudiocode } from "react-icons/si";
import { AiOutlineMobile } from "react-icons/ai";
import { FaVideo, FaWrench } from "react-icons/fa";
import { GiPhotoCamera, GiMoneyStack } from "react-icons/gi";
import { Link } from "react-router-dom";

export default function Work(props) {
  const [isclicked, setisclicked] = useState(0);
  return (
    <Container>
      <works>
        <div className={style.work}>
          <div className={style.work_image}>
            <SiVisualstudiocode />
          </div>
          <div className={style.work_title}>Web Design and Development</div>
          <div className={style.work_desc}>
            <p>
              A clean, user-friendly, optimized and snappy website is a must in
              today’s day and age to attract web traffic. In the 21st century
              people conduct their research on the internet before doing any
              work/business with the particular individual, institution or
              company. At Mayan, we make sure that the web-surfer that visits
              your website gets the best user experience on the internet: giving
              you or your company/institution a great first impression.
            </p>
          </div>
          <div className={style.readmore}>
            <Link
              to={{
                pathname: "/services",
                desc: 1,
              }}
            >
              Read More
              <span>→</span>
            </Link>
          </div>
        </div>
        <div className={style.work}>
          <div className={style.work_image}>
            <DiCodeigniter />
          </div>
          <div className={style.work_title}>Software Development</div>
          <div className={style.work_desc}>
            At Mayan, we provide cost-effective, quality oriented, and reliable
            software services to clients across the globe. we can handle all
            aspects of your software project (specification, designs and
            implementation, testing and related services). With the focus on
            providing seamless user experience, we build turn-key custom
            solutions that reflect your demands and capabilities.
          </div>
          <div className={style.readmore}>
            <Link
              to={{
                pathname: "/services",
                desc: 5,
              }}
            >
              Read More
              <span>→</span>
            </Link>
          </div>
        </div>
        <div className={style.work}>
          <div className={style.work_image}>
            <AiOutlineMobile />
          </div>
          <div className={style.work_title}>
            Mobile Application development (android/iOS)
          </div>
          <div className={style.work_desc}>
            <p>
              By the end of 2019, hand held devices were predicted to comprise
              63% of the global internet use. This statistic is much more
              relevant in countries like Nepal, India, China, Vietnam, Cambodia
              etc. where the majority of the population accessed the internet
              for the first time with the adoption of cheap and reliable
              smartphones.
            </p>
          </div>
          <div className={style.readmore}>
            <Link
              to={{
                pathname: "/services",
                desc: 10,
              }}
            >
              Read More
              <span>→</span>
            </Link>
          </div>
        </div>
        <div className={style.work}>
          <div className={style.work_image}>
            <BiCodeAlt />
          </div>
          <div className={style.work_title}>Graphic Designing</div>
          <div className={style.work_desc}>
            <p>
              In today’s competitive times, standing out from the crowd is a
              must. All individuals, companies and institutions must build a
              brand for themselves in order to get noticed and remembered.
            </p>
          </div>
          <div className={style.readmore}>
            <Link
              to={{
                pathname: "/services",
                desc: 15,
              }}
            >
              Read More
              <span>→</span>
            </Link>
          </div>
        </div>
        <div className={style.work}>
          <div className={style.work_image}>
            <BiCodeAlt />
          </div>
          <div className={style.work_title}>Social Media Marketing</div>
          <div className={style.work_desc}>
            <p>
              Social Media presence for an individual, company or institution is
              a must in today’s digitized age. To succeed in the age of the
              internet all entities must harness the power and reach of social
              media.
            </p>
          </div>
          <div className={style.readmore}>
            <Link
              to={{
                pathname: "/services",
                desc: 20,
              }}
            >
              Read More
              <span>→</span>
            </Link>
          </div>
        </div>
        <div className={style.work}>
          <div className={style.work_image}>
            <FaVideo />
          </div>
          <div className={style.work_title}>VideoGraphy</div>
          <div className={style.work_desc}>
            <p>
              Stories that can be seen have a bigger impact on a person compared
              to a story that can just be heard. At Mayan, we believe that a
              well produced video can mobilize a generation of people for a
              cause or it can simply be a time capsule that takes us back down
              the memory lane.
            </p>
          </div>
          <div className={style.readmore}>
            <Link
              to={{
                pathname: "/services",
                desc: 25,
              }}
            >
              Read More
              <span>→</span>
            </Link>
          </div>
        </div>
        <div className={style.work}>
          <div className={style.work_image}>
            <GiPhotoCamera />
          </div>
          <div className={style.work_title}>Photography</div>
          <div className={style.work_desc}>
            <p>
              Photographs have the power to trap a certain moment of time for
              eternity recording all your important events, places, items,
              memories with a click of a button. At Mayan, we believe that a
              good photograph has the ability to break all language barriers and
              convey its intended meaning to the masses with ease.
            </p>
          </div>
          <div className={style.readmore}>
            <Link
              to={{
                pathname: "/services",
                desc: 30,
              }}
            >
              Read More
              <span>→</span>
            </Link>
          </div>
        </div>
        <div className={style.work}>
          <div className={style.work_image}>
            <FaWrench />
          </div>
          <div className={style.work_title}>SEO & Website maintenance</div>
          <div className={style.work_desc}>
            <p>
              With the current rate of internet usage growth; it is not only
              essential to have a presence on the web but it is equally
              important to be seen by others on the internet. Search Engine
              Optimization (SEO) is the process of improving a web platforms
              visibility on the internet (i.e. search engines like google and
              bing).
            </p>
          </div>
          <div className={style.readmore}>
            <Link
              to={{
                pathname: "/services",
                desc: 35,
              }}
            >
              Read More
              <span>→</span>
            </Link>
          </div>
        </div>
        <div className={style.work}>
          <div className={style.work_image}>
            <GiMoneyStack />
          </div>
          <div className={style.work_title}>E-commerce systems</div>
          <div className={style.work_desc}>
            <p>
              Modern times has seen the internet evolve from a platform that
              served as a forum for discussing ideas to the current times when
              the internet itself has become a marketplace from tangible and
              intangible goods and services. For a venture that aims to get
              their product or service to the larger masses, a well designed
              minimal but high functioning eCommerce website is a must.
            </p>
          </div>
          <div className={style.readmore}>
            <Link
              to={{
                pathname: "/services",
                desc: 40,
              }}
            >
              Read More
              <span>→</span>
            </Link>
          </div>
        </div>
      </works>
    </Container>
  );
}
