import React, { useLayoutEffect } from "react";
import { Container } from "@material-ui/core";
import style from "./Work.module.scss";

export default function Work_detail(props) {
  useLayoutEffect(() => {
    window.scrollTo(0, props.history.location.desc * 100);
    // alert();
  });
  return (
    <Container>
      <works>
        <div
          id="1"
          className={style.work}
          style={{
            height: "min-content",
            flex: "0 0 90%",
            margin: "2rem auto",
          }}
        >
          <div className={style.work_title}>Web Design and Development</div>
          <div
            className={style.work_desc}
            style={{ width: "100%", height: "min-content" }}
          >
            <p>
              A clean, user-friendly, optimized and snappy website is a must in
              today’s day and age to attract web traffic. In the 21st century
              people conduct their research on the internet before doing any
              work/business with the particular individual, institution or
              company. At Mayan, we make sure that the web-surfer that visits
              your website gets the best user experience on the internet: giving
              you or your company/institution a great first impression.
            </p>
            <p>
              All organizations in today’s digitalized age must have a robust
              and responsive web design. Furthermore, with the exponential
              growth in the use of handheld devices i.e. smartphones and
              tablets, it has become essential that all web platforms perform
              equally on all forms of devices with exemplary user interface for
              a flawless and smooth experience.
            </p>
            <p>
              Mayan is your ultimate partner in creating a web platform that
              will help you and your business/institution achieve a greater
              milestone. We will help you conceptualize, strategize, design,
              build and execute your website so that you can succeed in your
              endeavours.
            </p>
          </div>
        </div>
        <div
          className={style.work}
          style={{
            height: "min-content",
            flex: "0 0 90%",
            margin: "2rem auto",
          }}
        >
          <div id="software" className={style.work_title}>
            Software Development
          </div>
          <div
            className={style.work_desc}
            style={{ width: "100%", height: "min-content" }}
          >
            <p>
              At Mayan, we provide cost-effective, quality oriented, and
              reliable software services to clients across the globe. we can
              handle all aspects of your software project (specification,
              designs and implementation, testing and related services). With
              the focus on providing seamless user experience, we build turn-key
              custom solutions that reflect your demands and capabilities.
            </p>
          </div>
        </div>
        <div
          className={style.work}
          style={{
            height: "min-content",
            flex: "0 0 90%",
            margin: "2rem auto",
          }}
        >
          <div className={style.work_title}>
            Mobile Application development (android/iOS)
          </div>
          <div
            className={style.work_desc}
            style={{ width: "100%", height: "min-content" }}
          >
            <p>
              By the end of 2019, hand held devices were predicted to comprise
              63% of the global internet use. This statistic is much more
              relevant in countries like Nepal, India, China, Vietnam, Cambodia
              etc. where the majority of the population accessed the internet
              for the first time with the adoption of cheap and reliable
              smartphones.
            </p>
            <p>
              At Mayan, we have the capability to design mobile applications
              that range in complexity as per the need of our client. We have
              access to a cohort of amazing developers who are experts at
              optimizing the mobile application experience on android, iOS and
              for cross-platform purposes.
            </p>
            <p>
              Smartphones and handheld devices are the future we are heading
              towards. Mayan is a cutting-edge mobile application development
              company with a team of expert mobile developers, designers,
              creative engineers and innovative user experience creators for
              your mobile application.
            </p>
          </div>
        </div>
        <div
          className={style.work}
          style={{
            height: "min-content",
            flex: "0 0 90%",
            margin: "2rem auto",
          }}
        >
          <div className={style.work_title}>Graphic Designing</div>
          <div
            className={style.work_desc}
            style={{ width: "100%", height: "min-content" }}
          >
            <p>
              In today’s competitive times, standing out from the crowd is a
              must. All individuals, companies and institutions must build a
              brand for themselves in order to get noticed and remembered.
            </p>
            <p>
              Professional graphic designs will aid you in creating a unique
              brand identity so that you can connect with your clients and
              develop trust with them. In a time where there are thousands of
              competitors in the market, a good graphic design can give you the
              competitive edge to make a good first impression and ultimately
              create a long lasting impact.
            </p>
            <p>
              At Mayan, we will work with you to create visual presentations
              that will make you and your company/institution appear
              professional, unique, credible and trustworthy.
            </p>
          </div>
        </div>
        <div
          className={style.work}
          style={{
            height: "min-content",
            flex: "0 0 90%",
            margin: "2rem auto",
          }}
        >
          <div className={style.work_title}>Social Media Marketing</div>
          <div
            className={style.work_desc}
            style={{ width: "100%", height: "min-content" }}
          >
            <p>
              Social Media presence for an individual, company or institution is
              a must in today’s digitized age. To succeed in the age of the
              internet all entities must harness the power and reach of social
              media.
            </p>
            <p>
              From selling your product online to increasing your reach to a
              wider audience, social media is the obvious route for growth. With
              approximately 3.8 billion active users of social media (out of the
              total population of 7.8 billion), it is necessary to have social
              media marketing as a strategy to improve one’s online presence.
            </p>
            <p>
              At Mayan, we have all the solutions for your social media needs in
              order for you and your company to thrive in the modern internet
              age. From helping you build your own social media brand to
              delivering your messaging to getting your products recognized on
              the web, we believe that our team has the right credentials to
              help you improve your social media reach.
            </p>
          </div>
        </div>
        <div
          className={style.work}
          style={{
            height: "min-content",
            flex: "0 0 90%",
            margin: "2rem auto",
          }}
        >
          <div className={style.work_title}>VideoGraphy</div>
          <div
            className={style.work_desc}
            style={{ width: "100%", height: "min-content" }}
          >
            <p>
              Stories that can be seen have a bigger impact on a person compared
              to a story that can just be heard. At Mayan, we believe that a
              well produced video can mobilize a generation of people for a
              cause or it can simply be a time capsule that takes us back down
              the memory lane.
            </p>
            <p>
              Our talented group of videographers who are well versed in the art
              of video making. From conceptualizing a video to shooting, editing
              and post producing our team will collaborate with you to make sure
              that your story gets the attention that it deserves.
            </p>
          </div>
        </div>
        <div
          className={style.work}
          style={{
            height: "min-content",
            flex: "0 0 90%",
            margin: "2rem auto",
          }}
        >
          <div className={style.work_title}>Web Design and Development</div>
          <div
            className={style.work_desc}
            style={{ width: "100%", height: "min-content" }}
          >
            <p>
              A clean, user-friendly, optimized and snappy website is a must in
              today’s day and age to attract web traffic. In the 21st century
              people conduct their research on the internet before doing any
              work/business with the particular individual, institution or
              company. At Mayan, we make sure that the web-surfer that visits
              your website gets the best user experience on the internet: giving
              you or your company/institution a great first impression.
            </p>
            <p>
              All organizations in today’s digitalized age must have a robust
              and responsive web design. Furthermore, with the exponential
              growth in the use of handheld devices i.e. smartphones and
              tablets, it has become essential that all web platforms perform
              equally on all forms of devices with exemplary user interface for
              a flawless and smooth experience.
            </p>
            <p>
              Mayan is your ultimate partner in creating a web platform that
              will help you and your business/institution achieve a greater
              milestone. We will help you conceptualize, strategize, design,
              build and execute your website so that you can succeed in your
              endeavours.
            </p>
          </div>
        </div>
        <div
          className={style.work}
          style={{
            height: "min-content",
            flex: "0 0 90%",
            margin: "2rem auto",
          }}
        >
          <div className={style.work_title}>Photography</div>
          <div
            className={style.work_desc}
            style={{ width: "100%", height: "min-content" }}
          >
            <p>
              Photographs have the power to trap a certain moment of time for
              eternity recording all your important events, places, items,
              memories with a click of a button. At Mayan, we believe that a
              good photograph has the ability to break all language barriers and
              convey its intended meaning to the masses with ease.
            </p>
            <p>
              Our talented network of photographers are experts in the art of
              photography. Our team will help you photograph in both indoor as
              well as outdoor locations. Additionally, we also have the ability
              to fulfill your niche photography demands such as product
              photography, brand photography, event photography etc.
            </p>
          </div>
        </div>
        <div
          className={style.work}
          style={{
            height: "min-content",
            flex: "0 0 90%",
            margin: "2rem auto",
          }}
        >
          <div className={style.work_title}>SEO & Website maintenance</div>
          <div
            className={style.work_desc}
            style={{ width: "100%", height: "min-content" }}
          >
            <p>
              With the current rate of internet usage growth; it is not only
              essential to have a presence on the web but it is equally
              important to be seen by others on the internet. Search Engine
              Optimization (SEO) is the process of improving a web platforms
              visibility on the internet (i.e. search engines like google and
              bing).
            </p>
            <p>
              At Mayan, we do not use cheap unethical tricks to improve the
              ranking of your websites. These hacks are unsustainable and will
              negatively affect your ranking in the long run. Our SEO experts
              who are veterans in SEO use the tried and tested organic methods
              like keyword research, website optimization, back link creation to
              sustainably improve your websites ranking.
            </p>
          </div>
        </div>
        <div
          className={style.work}
          style={{
            height: "min-content",
            flex: "0 0 90%",
            margin: "2rem auto",
          }}
        >
          <div className={style.work_title}>E-commerce systems</div>
          <div
            className={style.work_desc}
            style={{ width: "100%", height: "min-content" }}
          >
            <p>
              Modern times has seen the internet evolve from a platform that
              served as a forum for discussing ideas to the current times when
              the internet itself has become a marketplace from tangible and
              intangible goods and services. For a venture that aims to get
              their product or service to the larger masses, a well designed
              minimal but high functioning eCommerce website is a must.
            </p>
            <p>
              At Mayan, we take the appropriate amount of time to research and
              understand your business, you customers and your desired
              objectives from the eCommerce platform before we even start to
              design and develop the platform. We believe that researching the
              market and other relevant topics concerning your business will
              help us deliver a better quality eCommerce solution so that your
              company can grow exponentially.
            </p>
            <p>
              Our team believes that eCommerce has revolutionized the shopping
              industry. We want to help your customers buy your amazing products
              and services from the comfort of their homes in a professional yet
              user friendly platform. Our talented pool of developers and
              marketing gurus will plan, develop, test and execute your
              eCommerce platform so that your business will prosper in the age
              of the internet.
            </p>
          </div>
        </div>
      </works>
    </Container>
  );
}
