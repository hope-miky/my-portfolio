import { StaticImage } from "gatsby-plugin-image";
import React, { useEffect, useState } from "react";
import { withPrefix } from "gatsby";
import projects, { IProject } from "./project_data";
import { FolderIcon, LinkIcon, LockClosedIcon } from "@heroicons/react/outline";
import MyModal from "./ProjectDetails";
import { animated, useSprings } from "@react-spring/web";
import Typewriter from "typewriter-effect";

const ProjectsView = ({ view }: any) => {
  const [display, setDisplay] = useState(true);

  const [springs, apis] = useSprings(projects.length + 1, (index) => ({
    from: {
      opacity: 0,
      y: -100,
    },
  }));

  useEffect(() => {
    if (view === "Projects") {
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
      }, 1000);
    }
  }, [view]);

  return (
    <>
      {display && (
        <div className="dark:bg-main-bg flex-col align-middle  ">
          {/* <div className=" "> */}
          <animated.div
            style={{ ...springs[0] }}
            className=" hidden md:block text-bold dark:text-white text-gray-500 font-sans font-bold uppercase text-4xl sm:text-5xl ml-12 pt-20"
          >
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    '<span style="color: #66b2b2; font-size: 45px;">011.<br /></span> <span style="font-size: 85px;">Projects</span>'
                  )
                  .start();
              }}
            />
          </animated.div>

          <div className="flex justify-center ">
            <div className="flex maxwidthlimit flex-wrap mt-3 mx-auto  lg:mx-44 ">
              {springs.map((_, idx: number) => {
                if (idx < projects.length) {
                  return (
                    <animated.div
                      key={idx}
                      style={{ ...springs[idx + 1] }}
                      className="dark:bg-second-bg bg-gray-200 lg:w-96 mx-3 z-0 my-5  hover:-translate-y-2 rounded-md bg-opacity-25 p-3 backdrop-blur-md font-medium dark:border-none
                       border border-b-4 border-r-4 border-teal-600 shadow-lg hover:shadow-sm hover:border-b-2 hover:border-r-2 hover:bg-teal-100/50
                      "
                    >
                      <div className="flex justify-between">
                        <FolderIcon className="h-10 w-10 mx-2  text-teal-500 " />
                        <div className="flex">
                          {projects[idx].link ? (
                            <LinkIcon
                              onClick={() => {
                                window.open(projects[idx].link, "_blank");
                              }}
                              className="h-6 w-6 mx-2 text-gray-400 hover:text-teal-400 hover:cursor-pointer "
                            />
                          ) : (
                            <LockClosedIcon className="h-6 w-6 mx-2 text-gray-400 hover:text-red-400 hover:cursor-pointer " />
                          )}
                          <MyModal
                            title={projects[idx].name}
                            description={projects[idx].details}
                          />
                        </div>
                      </div>
                      <p className=" flex justify-center dark:text-gray-300 text-gray-500 text-xl mb-4">
                        {" "}
                        {projects[idx].name}{" "}
                      </p>
                      <p className=" flex justify-center mx-auto text-justify dark:text-gray-300 text-gray-400 text-sm font-sans w-5/6 mb-4 h-24 text-clip overflow-hidden">
                        {projects[idx].description}
                      </p>
                      <p className=" flex justify-center mx-auto text-justify text-gray-400 text-sm font-mono w-5/6 mb-4">
                        {projects[idx].frameworks.map((frame, idx) => (
                          <span className="mx-2"> {frame} </span>
                        ))}
                      </p>
                    </animated.div>
                  );
                } else {
                  return <></>;
                }
              })}
            </div>
          </div>
          {/* </div> */}
        </div>
      )}
    </>
  );
};

export default ProjectsView;
