import { StaticImage } from "gatsby-plugin-image";
import React, { useEffect, useState } from "react";
import { animated, useSpring } from "@react-spring/web";
import CircularImagesComponent from "./CircularImages";
import { BrowserView, MobileView } from "react-device-detect";
import Typewriter from "typewriter-effect";

const AboutMeView = ({ view }: any) => {
  const [display, setDisplay] = useState(false);

  const [springs, api] = useSpring(() => ({
    from: {
      opacity: 0,
      y: -100,
    },
  }));

  useEffect(() => {
    if (view === "About Me") {
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
          className=" dark:bg-main-bg  sm:py-32 md:py-0 w-screen flex flex-col justify-start "
          id="aboutmepage"
        >
          <animated.div
            style={{
              ...springs,
            }}
          >
            <div className="flex flex-row w-screen mx-auto ">
              <div className=" flex-1 flex flex-col justify-center h-screen">
                <div className=" flex-col px-12 sm:px-40 min-w-min dark:text-gray-200 text-gray-500 ">
                  <p className=" font-sans  my-4 text-justify ">
                    I am Tesfamichael Molla, Software Engineer based in Poland.
                    I am born and raised in Woldiya, Ethiopia. I started my
                    developer journey since highschool studying HTML and CSS and
                    continued my BSc degree in Electrical and Computer
                    Engineering at Wolkite University, 2019.
                  </p>
                  <p className=" font-sans  my-4  text-justify ">
                    I started my first job as{" "}
                    <span className="dark:text-teal-200 text-amber-500 font-bold">
                      TME Education Ambassador
                    </span>{" "}
                    (2018) at a Polish company called TME, I gave practical
                    workshops and trainings for over 3,500 students in Ethiopia.
                    I continued to be partnered with 2 Garment specialists to
                    start a startup called Poshak Consultancy Services PLC, to
                    which I served as a{" "}
                    <span className="dark:text-teal-200 text-amber-500 font-bold">
                      CTO
                    </span>{" "}
                    for a year working on SaSS Based ERP Platform for garment
                    industries. After I left Poshak I continued to pursue my
                    dream, to be a full time freelancer. Now I am working as a{" "}
                    <span className="dark:text-teal-200 text-amber-500 font-bold">
                      {" "}
                      Mid-Level Backend Developer{" "}
                    </span>
                    for one of the fastest growing bank in Africa, Equity Bank
                    Limited.
                  </p>
                </div>

                <div className=" pl-28 hidden md:inline text-bold dark:text-white text-gray-500 font-sans font-bold uppercase text-4xl sm:text-5xl ml-12 mt-12">
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter
                        .typeString(
                          '<span style="color: #66b2b2; font-size: 45px;">001.<br /></span> <span style="font-size: 85px;">About me</span>'
                        )
                        .start();
                    }}
                  />
                </div>
              </div>

              <div className=" lg:ml-24 flex-1 justify-center flex flex-col ">
                <StaticImage
                  className=" mb-10 ml-24  w-64 border-2 p-5 border-b-4 border-r-6 border-teal-400 rounded-lg shadow-lg hover:shadow-sm hover:border-b-2 hover:border-r-2 "
                  src="../../assets/images/profile.jpeg"
                  alt="A dinosaur"
                />
                <div className="flex">
                  <button className=" mx-3 px-5 py-2 font-medium  border dark:border-gray-200 dark:text-gray-200 border-black rounded-lg shadow-lg ">
                    Frameworks
                  </button>
                  <button className=" mx-3 px-5 py-2 font-medium border border-b-4 border-r-4 text-amber-600 border-amber-400 rounded-lg shadow-lg hover:shadow-sm hover:border-b-2 hover:border-r-2">
                    ReactJS
                  </button>
                  <button className=" mx-3 px-5 py-2 font-medium border border-b-4 text-green-600 border-r-4 border-green-400 rounded-lg shadow-lg hover:shadow-sm hover:border-b-2 hover:border-r-2">
                    Django
                  </button>
                  <button className=" mx-3 px-5 py-2 font-medium border border-b-4 text-blue-500 border-r-4 border-blue-400 rounded-lg shadow-lg hover:shadow-sm hover:border-b-2 hover:border-r-2">
                    Flutter
                  </button>
                </div>
                <div className="flex mt-5">
                  <button className=" mx-3 px-5 py-2 font-medium border  dark:border-gray-200 dark:text-gray-200 border-black rounded-lg shadow-lg ">
                    Languages
                  </button>
                  <button className=" mx-3 px-5 py-2 font-medium border border-b-4 border-r-4 text-amber-600 border-amber-400 rounded-lg shadow-lg hover:shadow-sm hover:border-b-2 hover:border-r-2">
                    JavaScript
                  </button>
                  <button className=" mx-3 px-5 py-2 font-medium border border-b-4 text-green-600 border-r-4 border-green-400 rounded-lg shadow-lg hover:shadow-sm hover:border-b-2 hover:border-r-2">
                    Python
                  </button>
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
