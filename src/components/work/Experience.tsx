import { animated, useSprings } from "@react-spring/web";
import React, { useEffect, useState } from "react";
import work_data from "./work_data";
import Typewriter from "typewriter-effect";
import { BrowserView } from "react-device-detect";

const ExperiencePageView = ({ view }: any) => {
  const [display, setDisplay] = useState(true);

  const [springs, apis] = useSprings(work_data.length + 1, (index) => ({
    from: {
      opacity: 0,
      y: -100,
    },
  }));

  useEffect(() => {
    if (view === "experience") {
      setTimeout(() => {
        setDisplay(true);
        apis.start((index) => ({
          to: {
            y: 0,
            opacity: 1,
          },
          delay: index * 200,
        }));
      }, 800);
    } else {
      apis.start((index) => ({
        to: {
          y: -100,
          opacity: 0,
        },
        delay: index * 200,
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
          className=" first-screen sm:h-screen pb-36  main-bg"
          id="experiencepage"
        >
          {/* Desktop view */}
          <animated.div
            style={{ ...springs[0] }}
            className="text-bold hidden md:block text-white font-sans font-bold uppercase text-4xl sm:text-5xl ml-12 mt-12"
          >
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    '<span style="color: #66b2b2; font-size: 45px;">010.<br /></span> <span style="font-size: 85px;">Experience</span>'
                  )
                  .start();
              }}
            />
          </animated.div>

          {/* Mobile view */}
          <animated.div
            style={{ ...springs[0] }}
            className="text-bold md:hidden text-white font-sans font-bold uppercase text-4xl sm:text-5xl ml-12 mt-12"
          >
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    '<span style="color: #66b2b2; font-size: 25px; margin-bottom: 10px;">010.<br /></span> <span style="font-size: 50px;">Experience</span>'
                  )
                  .start();
              }}
            />
          </animated.div>

          <div className="  w-screen flex flex-wrap flex-col justify-center md:mt-24 sm:mt-0">
            <div className="flex flex-wrap justify-center ">
              {springs.map((_, idx: number) => {
                if (idx < work_data.length) {
                  return (
                    <animated.div
                      key={idx}
                      className=" m-12 w-full sm:w-auto"
                      style={{ ...springs[idx + 1] }}
                    >
                      <div className="text-teal-400 text-8xl">0{idx + 1}</div>
                      <div className="text-gray-400 text-3xl">
                        {work_data[idx].name}
                      </div>
                      <div className="text-teal-700 text-lg">
                        {work_data[idx].title}
                      </div>
                      <div className="text-gray-600">{work_data[idx].time}</div>
                    </animated.div>
                  );
                } else {
                  return <></>;
                }
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ExperiencePageView;
