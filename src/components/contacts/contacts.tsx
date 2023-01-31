import React, { useEffect, useState } from "react";
import { animated, useSprings } from "@react-spring/web";
import { SocialIcon } from "react-social-icons";
import Typewriter from "typewriter-effect";

const ContactsPageView = ({ view }: any) => {
  const [display, setDisplay] = useState(true);

  const [springs, apis] = useSprings(5, (index) => ({
    from: {
      opacity: 0,
      y: -100,
    },
  }));

  useEffect(() => {
    if (view === "Contacts") {
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
          className=" h-screen w-screen dark:bg-main-bg sm:pt-24  "
          id="contactspage"
        >
          <div className=" flex flex-wrap justify-center pt-24 ">
            <animated.div
              style={{ ...springs[1] }}
              className="flex flex-col justify-center w-full sm:w-1/4  mx-12 mb-10 "
            >
              <div className="dark:text-white text-xl text-gray-500 ">
                {" "}
                Poznan, Poland{" "}
              </div>
              <div className="dark:text-white text-gray-700 text-xl  ">
                {" "}
                +48692079416{" "}
              </div>
              <a
                href="mailto:hope.mikypl@gmail.com"
                className="  text-teal-600 text-md font-mono hover:underline hover:font-bold hover:cursor-pointer"
              >
                {" "}
                hope.mikypl@gmail.com{" "}
              </a>
              <a
                href="mailto:hope.miky1074@gmail.com"
                className="  text-teal-600 text-md font-mono hover:underline hover:font-bold hover:cursor-pointer"
              >
                {" "}
                hope.miky1074@gmail.com{" "}
              </a>
            </animated.div>

            <div className="flex flex-col justify-center sm:w-1/3 mx-5 ">
              <animated.div
                style={{ ...springs[2] }}
                className=" text-center mb-5 text-xl dark:text-gray-400 text-gray-500 font-bold font-sans "
              >
                {" "}
                I am not actively looking for a new role but I am open for
                discussion :){" "}
              </animated.div>

              <animated.div
                style={{ ...springs[3] }}
                className="flex justify-center"
              >
                {/* <button className=" mx-3 px-5 py-2 font-medium border border-b-4 border-r-4 text-amber-600 border-amber-400 rounded-lg shadow-lg hover:shadow-sm hover:border-b-2 hover:border-r-2">
                  Linke
                </button> */}
                <SocialIcon
                  className="mx-3 hover:-translate-y-1 "
                  url="https://www.linkedin.com/in/tesfamichael-molla-989236171/"
                  fgColor="white"
                />
                <SocialIcon
                  className="mx-3 hover:-translate-y-1 "
                  url="https://github.com/hope-miky"
                  bgColor="gray"
                />
                <SocialIcon
                  className="mx-3 hover:-translate-y-1 "
                  url="https://twitter.com/hopemichael1074"
                  fgColor="white"
                />
                <SocialIcon
                  className="mx-3 hover:-translate-y-1 "
                  url="https://medium.com/@hope.miky1074"
                  bgColor="teal"
                />
                <SocialIcon
                  className="mx-3 hover:-translate-y-1 "
                  url="mailto:hope.mikypl@gmail.com"
                  bgColor="red"
                  fgColor="white"
                />
              </animated.div>
            </div>
          </div>

          {/* Desktop view */}
          <animated.div
            className=" hidden md:block text-bold dark:text-white text-gray-500 font-sans font-bold uppercase text-4xl sm:text-5xl md:mt-48 ml-12"
            style={{ ...springs[0] }}
          >
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    '<span style="color: #66b2b2; font-size: 45px;">100.<br /></span> <span style="font-size: 85px;">Contacts</span>'
                  )
                  .start();
              }}
            />
          </animated.div>
        </div>
      )}
    </>
  );
};

export default ContactsPageView;
