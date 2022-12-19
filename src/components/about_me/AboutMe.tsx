import { StaticImage } from "gatsby-plugin-image";
import React, { useEffect, useState } from "react";
import { animated, useSpring } from "@react-spring/web";
import CircularImagesComponent from "./CircularImages";
import { BrowserView, MobileView } from "react-device-detect";
import Typewriter from "typewriter-effect";

const AboutMeView = ({ view }: any) => {
  const [display, setDisplay] = useState(false);
  const [innerWidth, setinnerWidth] = useState(window.innerWidth);

  const [springs, api] = useSpring(() => ({
    from: {
      opacity: 0,
      y: -100,
    },
  }));

  useEffect(() => {
    if (view === "about") {
      setTimeout(() => {
        setDisplay(true);
        api.start(() => ({
          to: {
            y: 0,
            opacity: 1,
          },
        }));
      }, 1000);
    } else {
      api.start(() => ({
        to: {
          y: -100,
          opacity: 0,
        },
      }));
      setTimeout(() => {
        setDisplay(false);
      }, 800);
    }
  }, [view]);

  return (
    <>
      {display && (
        <div
          className=" main-bg sm:py-32 md:py-0 w-screen flex flex-col justify-start "
          id="aboutmepage"
        >
          <animated.div
            style={{
              ...springs,
            }}
            className=" hidden md:inline text-bold text-white font-sans font-bold uppercase text-4xl sm:text-5xl ml-12 mt-12"
          >
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    '<span style="color: #66b2b2; font-size: 45px;">001.<br /></span> <span style="font-size: 85px;">About me</span>'
                  )
                  .start();
              }}
            />
          </animated.div>

          {/* Mobile view */}
          <animated.div
            style={{
              ...springs,
            }}
            className="md:hidden text-bold text-white font-sans font-bold uppercase text-4xl sm:text-5xl ml-12 mt-12"
          >
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    '<span style="color: #66b2b2; font-size: 25px;">001.<br /></span> <span style="font-size: 50px;">About me</span>'
                  )
                  .start();
              }}
            />
          </animated.div>

          <animated.div
            style={{
              ...springs,
            }}
          >
            <div className="flex flex-row w-screen mx-auto pb-24">
              <div className=" flex-1">
                <div className=" flex-col px-12 sm:px-40 min-w-min ">
                  <p className=" font-sans text-gray-200 my-4 text-justify ">
                    I am Tesfamichael Molla, Software Engineer based in Poland.
                    I am born and raised in Woldiya, Ethiopia. I started my
                    developer journey since highschool studying HTML and CSS and
                    continued my BSc degree in Electrical and Computer
                    Engineering at Wolkite University, 2019.
                  </p>
                  <p className=" font-sans text-gray-200 my-4  text-justify ">
                    I started my first job as{" "}
                    <span className="text-teal-200 font-bold">
                      TME Education Ambassador
                    </span>{" "}
                    (2018) at a Polish company called TME, I gave practical
                    workshops and trainings for over 3,500 students in Ethiopia.
                    I continued to be partnered with 2 Garment specialists to
                    start a startup called Poshak Consultancy Services PLC, to
                    which I served as a{" "}
                    <span className="text-teal-200 font-bold">CTO</span> for a
                    year working on SaSS Based ERP Platform for garment
                    industries. After I left Poshak I continued to pursue my
                    dream, to be a full time freelancer. Now I am working as a{" "}
                    <span className="text-teal-200 font-bold">
                      {" "}
                      Mid-Level Backend Developer{" "}
                    </span>
                    for one of the fastest growing bank in Africa, Equity Bank
                    Limited.
                  </p>
                  <p className=" font-sans text-gray-200 my-4 text-justify ">
                    As a freelancer I started my journey by contributing to a
                    job market search application for Ghost developers, Pakistan
                    as a Flutter developer. Continued to work on WAX NFT and
                    wallet manager app for Token Wave, USA. Now I am working as
                    a{" "}
                    <span className="text-teal-200 font-bold">
                      {" "}
                      Mid-Level Backend Developer{" "}
                    </span>
                    for one of the fastest growing bank in Africa, Equity Bank
                    Limited.
                  </p>
                </div>
              </div>
              <div className=" flex-1 md:flex justify-center hidden md:visible ">
                <div className="flex-1 flex flex-col justify-center ">
                  <div className=" fixed">
                    <CircularImagesComponent />
                  </div>
                  <StaticImage
                    className="ml-24 mt-24 w-64 border-2 rounded-full border-teal-500 p-5  "
                    src="../../assets/images/profile.jpeg"
                    alt="A dinosaur"
                  />
                </div>
              </div>
            </div>
          </animated.div>
        </div>
      )}
    </>
  );
};

export default AboutMeView;
