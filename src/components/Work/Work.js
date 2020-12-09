import React, { useState } from "react";
import style from "./Work.module.scss";
import { Container } from "@material-ui/core";
import { BiCodeAlt } from "react-icons/bi";
import { DiCodeigniter } from "react-icons/di";
import { SiVisualstudiocode } from "react-icons/si";
import { AiOutlineMobile } from "react-icons/ai";
import { FaVideo, FaWrench } from "react-icons/fa";
import { GiPhotoCamera } from "react-icons/gi";
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
            A clean, user-friendly, optimized and snappy website is a must in
            today’s day and age to attract web traffic. We design and deliver
            websites of impeccable quality.
          </div>
          <div className={style.readmore}>
            <Link
              to={{
                pathname: "/work",
                state: {
                  desc: "details of props is here",
                },
              }}
            >
              Read More {isclicked}
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            voluptate quisquam fugiat laboriosam? Ad sapiente ex voluptatibus
            sequi iste labore necessitatibus error ipsa aspernatur voluptatum
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
            By the end of 2019, hand held devices were predicted to comprise 63%
            of the global internet use. This percentage has increased ever
            since. Thus, we specialize in developing mobile applications for
            popular platforms i.e. google’s android & apple’s iOS.
          </div>
        </div>
        <div className={style.work}>
          <div className={style.work_image}>
            <BiCodeAlt />
          </div>
          <div className={style.work_title}>Graphic Designing</div>
          <div className={style.work_desc}>
            In today’s competitive times, standing out from the crowd is a must
            and a professional graphic design will definitely help you stand
            out. At Mayan, we believe that a great graphic is worth more than a
            thousand words.
          </div>
        </div>
        <div className={style.work}>
          <div className={style.work_image}>
            <BiCodeAlt />
          </div>
          <div className={style.work_title}>Social Media Marketing</div>
          <div className={style.work_desc}>
            Social Media presence for an individual, company or institution is a
            must in today’s digitized age. To succeed in the age of the internet
            all entities must harness the power and reach of social media.
          </div>
        </div>
        <div className={style.work}>
          <div className={style.work_image}>
            <FaVideo />
          </div>
          <div className={style.work_title}>VideoGraphy</div>
          <div className={style.work_desc}>
            /Stories that can be seen have a bigger impact on a person compared
            to a story that can only be heard. At Mayan, we believe that well
            produced video can mobilize a generation of people for a cause or it
            can simply be a time capsule that takes us back down the memory
            lane.
          </div>
        </div>
        <div className={style.work}>
          <div className={style.work_image}>
            <GiPhotoCamera />
          </div>
          <div className={style.work_title}>Photography</div>
          <div className={style.work_desc}>
            Photographs have the power to trap a certain moment of time for
            eternity recording all your important events, places, items,
            memories with a click of a button. At Mayan, we believe that a good
            photograph has the ability to break all language barriers and convey
            its intended meaning to the masses with ease.
          </div>
        </div>
        <div className={style.work}>
          <div className={style.work_image}>
            <FaWrench />
          </div>
          <div className={style.work_title}>SEO & Website maintenance</div>
          <div className={style.work_desc}>
            With the current rate of internet usage growth; it is not only
            essential to have a presence on the web but it is equally important
            to be seen by others on the internet. Search Engine Optimization
            (SEO) is exactly what needs to be done so that our web / eCommerce
            platform becomes visible on the opening page of the popular search
            engines.
          </div>
        </div>
      </works>
    </Container>
  );
}
