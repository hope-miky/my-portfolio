import React from "react";
import { animated, useSprings } from "@react-spring/web";
import { MenuAlt2Icon } from "@heroicons/react/outline";

function NavBarComponent({ setView }: any) {
  const bg_colors = ["bg-amber-400", "bg-red-400", "bg-blue-400"];
  const [_springs, _apis] = useSprings(bg_colors.length + 1, (index) => ({
    from: {
      x: -2000,
      y: 0,
    },
  }));

  const menu_values = [
    "Home",
    "About Me",
    "Experience",
    "Projects",
    "Contacts",
  ];

  const moveNavBar = () => {
    _apis.start((index) => ({
      to: {
        x: 0,
      },
      delay: index * 100,
    }));
  };

  const revertNavBar = () => {
    _apis.start((index) => ({
      to: {
        x: -2000,
        y: 0,
      },
      delay: (4 - index) * 100,
    }));
  };

  return (
    <div className="flex">
      <MenuAlt2Icon
        onClick={moveNavBar}
        className="fixed right-0 top-3  mr-12 h-10 w-10 text-teal-900 hover:cursor-pointer "
      />
      {bg_colors.map((color: string, idx: number) => {
        return (
          <animated.div
            key={idx}
            style={{ ..._springs[idx] }}
            className={`fixed w-3/4 h-screen z-${(idx + 1) * 10} ${color}`}
          />
        );
      })}

      <animated.div
        style={{ ..._springs[bg_colors.length] }}
        className="fixed w-3/4 h-screen z-40 bg-teal-100 "
      >
        <button
          onClick={revertNavBar}
          className=" fixed left-0 mt-12 ml-12 px-5 py-2 font-medium border border-b-4 border-r-4 border-black rounded-lg shadow-lg hover:shadow-sm hover:border-b-2 hover:border-r-2"
        >
          Return
        </button>

        <div className="fixed flex flex-col justify-center mt-40 w-3/4 ">
          {menu_values.map((menu_text: string, idx: number) => {
            return (
              <div
                key={idx}
                onClick={() => setView(menu_text)}
                className=" hover:border hover:border-r-0 hover:border-b-4  hover:border-black hover:rounded-lg hover:shadow-lg 
                hover:cursor-pointer text-2xl sm:text-7xl font-thin text-center py-5 w-full hover:font-bold dark:hover:text-white hover:text-main-bg/70 hover:rounded-l-full dark:hover:bg-main-bg hover:bg-white hover:border-y-2 "
              >
                <span>{menu_text}</span>
              </div>
            );
          })}
        </div>
      </animated.div>
    </div>
  );
}

export default NavBarComponent;
