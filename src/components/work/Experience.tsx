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
    if (view === "Experience") {
      setTimeout(() => {
        setDisplay(true);
        setTimeout(() => {
          apis.start((index) => ({
            to: {
              y: 0,
              opacity: 1,
            },
            delay: index * 200,
          }));
        }, 1000);
      }, 600);
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
          className="dark:bg-main-bg h-screen sm:h-screen  "
          id="experiencepage"
        >
          {/* Desktop view */}
          <animated.div
            style={{ ...springs[0] }}
            className=" ml-24 text-bold dark:text-white text-gray-500 font-sans font-bold uppercase text-4xl sm:text-5xl pt-12"
          >
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    '<span style="color: #66b2b2; font-size: 45px;">011.<br /></span> <span style="font-size: 85px;">Experience</span>'
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
