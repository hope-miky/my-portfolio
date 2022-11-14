import { StaticImage } from "gatsby-plugin-image";
import React, { useEffect, useState } from "react";
import { animated, useSpring } from "@react-spring/web";
import CircularImagesComponent from "./CircularImages";
import {BrowserView, MobileView} from 'react-device-detect';

const AboutMeView = ({ view }: any) => {
  const [display, setDisplay] = useState(false);
  const [innerWidth, setinnerWidth] = useState(window.innerWidth)

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
          <></>
          <animated.div
            style={{
              ...springs,
            }}
          >
            <button className="mt-5 flex justify-start sm:ml-12 text-bold text-white font-sans font-bold uppercase text-4xl sm:text-5xl land2">
              {" "}
              <span className="text-teal-400 font-bold mr-2">001.</span> About
              Me{" "}
            </button>
            <hr className=" sm:w-1/2 w-5/6 sm:mt-2 sm:mb-12" />
          </animated.div>

          <animated.div
            style={{
              ...springs,
            }}
          >
            <div className="flex flex-wrap w-screen  mx-auto pb-24">


              <div className=" flex-col px-12 sm:px-40 min-w-min ">
                <p className=" font-sans text-gray-200 my-4 text-justify ">
                  I am Tesfamichael Molla, Software Engineer based in Poland. I
                  am born and raised in Woldiya, Ethiopia. I started my
                  developer journey since highschool studying HTML and CSS and
                  continued my BSc degree in Electrical and Computer Engineering
                  at Wolkite University, 2019.
                </p>
                <p className=" font-sans text-gray-200 my-4  text-justify ">
                  I started my first job as{" "}
                  <span className="text-teal-200 font-bold">
                    TME Education Ambassador
                  </span>{" "}
                  (2018) at a Polish company called TME, I gave practical
                  workshops and trainings for over 3,500 students in Ethiopia. I
                  continued to be partnered with 2 Garment specialists to start
                  a startup called Poshak Consultancy Services PLC, to which I
                  served as a{" "}
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
                  As a freelancer I started my journey by contributing to a job
                  market search application for Ghost developers, Pakistan as a
                  Flutter developer. Continued to work on WAX NFT and wallet
                  manager app for Token Wave, USA. Now I am working as a{" "}
                  <span className="text-teal-200 font-bold">
                    {" "}
                    Mid-Level Backend Developer{" "}
                  </span>
                  for one of the fastest growing bank in Africa, Equity Bank
                  Limited.
                </p>
              </div>

              
            <BrowserView>
              <div className="flex-1 flex flex-col justify-center md:mt-40  w-1/2 h-1/2 ">
                <CircularImagesComponent />
                <StaticImage
                  className="ml-24 mt-24 w-64 border-2 rounded-full border-teal-500 p-5 absolute  "
                  src="../../assets/images/profile.jpeg"
                  alt="A dinosaur"
                />
              </div>
            </BrowserView>
              
            </div>
          </animated.div>
        </div>
      )}
    </>
  );
};

export default AboutMeView;
