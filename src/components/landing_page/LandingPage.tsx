import { animated, useSpring, useSprings } from "@react-spring/web";
import React, { useEffect, useState } from "react";
import Typewriter, { TypewriterClass } from "typewriter-effect";

const LandingPageView = ({ view, customMouseEnter, customMouseLeave }: any) => {
  const [display, setDisplay] = useState(true);

  const [first_spring, first_api] = useSprings(5, (index) => ({
    from: {
      y: -100,
      opacity: 0,
    },
  }));

  const [_display_spring, _display_api] = useSpring(() => ({
    from: {
      y: 0,
      opacity: 1,
    },
  }));

  const onInitHome = function (typewriter: TypewriterClass) {
    typewriter
      .pauseFor(1000)
      .typeString('I build <span style="color: #FFBF00;"> web </span> apps :')
      .start();
  };

  useEffect(() => {
    if (view === "home") {
      setDisplay(true);
      first_api.start((index) => ({
        to: {
          y: 0,
          opacity: 1,
        },
        delay: index * 200,
      }));
    } else {
      first_api.start((index) => ({
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
        <div className=" first-screen h-screen pb-36 flex flex-wrap flex-col justify-end main-bg">
          <div className=" w-4/5 sm:w-4/5 ml-12 mb-12  ">
            <animated.div style={{ ...first_spring[0] }}>
              <div className="font-mono sm:text-3xl text-teal-400 my-2 ">
                Hi :) I am
              </div>
            </animated.div>

            <animated.div style={{ ...first_spring[1] }}>
              <div className=" text-3xl sm:text-3xl md:text-5xl lg:text-9xl font-bold font-sans text-gray-200 md:my-1">
                <span
                  onMouseEnter={customMouseEnter}
                  onMouseLeave={customMouseLeave}
                >
                  Tesfamichael
                </span>
              </div>
            </animated.div>

            <animated.div style={{ ...first_spring[2] }}>
              <div className="text-2xl lg:text-9xl md:text-4xl sm:text-3xl text-gray-400 font-sans font-bold my-4 md:my-1">
                <Typewriter onInit={onInitHome} />
              </div>
            </animated.div>
          </div>
        </div>
      )}
    </>
  );
};

export default LandingPageView;
