import { animated, useSprings } from "@react-spring/web";
import React, { useEffect, useState } from "react";
import work_data from "./work_data";
import Typewriter from "typewriter-effect";

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

  const stack_colors = [ 'bg-red-500/30', 'bg-blue-500/30', 'bg-green-500/30', 'bg-yellow-500/30', 'bg-purple-500/30', 'bg-pink-500/30', 'bg-indigo-500/30']

  return (
    <>
      {display && (
        <div
          className=" first-screen sm:h-screen pb-24  main-bg"
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

          <div className="  w-screen flex flex-wrap flex-col justify-center md:mt-12 sm:mt-0">
            <div className="flex flex-wrap justify-center ">
              {springs.map((_, idx: number) => {
                if (idx < work_data.length) {
                  console.log(work_data[idx])
                  return (
                    <animated.div
                      key={`${idx}-work`}
                      className=" m-12 md:w-1/4 sm:w-auto main-bg rounded-lg md:p-5 "
                      style={{ ...springs[idx + 1] }}
                    >
                      <div className="text-teal-400 md:text-center text-xl font-bold uppercase">
                        {work_data[idx].name}
                      </div>
                      
                      <div className="text-white md:text-center text-sm mb-4">{work_data[idx].time}</div>
                      
                      <div className="text-gray-300 text-lg md:m-aut font-bold md:text-center border-y-2 md:mt-2 border-teal-500 md:px-3 md:py-1 md:mb-10">
                        {work_data[idx].title}
                      </div>

                      <div className="flex flex-wrap w-full ">
                          {
                            work_data[idx].stacks.map((item: any, id: number) => {
                              return (
                                <div key={item} className={`text-white font-bold md:text-center text-sm mx-2 border my-2 rounded-md border-white px-3 py-1 ${stack_colors[id % 7]}`}>
                                  {item}
                                </div>
                              )
                            })
                          }
                      </div>
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
