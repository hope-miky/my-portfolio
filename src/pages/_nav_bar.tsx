import React from "react";
import { animated, useSprings } from "@react-spring/web";
import { MenuAlt2Icon, ArrowRightIcon } from "@heroicons/react/outline";

function NavBarComponent({ customMouseEnter, customMouseLeave, setView }: any) {
  const bg_colors = ["bg-amber-400", "bg-red-400", "bg-blue-400"];
  const [_springs, _apis] = useSprings(bg_colors.length + 1, (index) => ({
    from: {
      x: 2000,
      y: 0,
    },
  }));

  // const menu_values = [
  //   "Home",
  //   "About Me",
  //   "Experience",
  //   "Projects",
  //   "Contacts",
  // ];

  const sideMenuValues = [
    {
      name: "Home",
      value: "home",
    },
    {
      name: "About Me",
      value: "about",
    },
    {
      name: "Experience",
      value: "experience",
    },
    {
      name: "Projects",
      value: "projects",
    },
    {
      name: "Contacts",
      value: "contacts",
    }
  ];

  const moveNavBar = () => {
    _apis.start((index) => ({
      to: {
        x: 1000,
      },
      delay: index * 100,
    }));
  };

  const revertNavBar = () => {
    _apis.start((index) => ({
      to: {
        x: 2000,
        y: 0,
      },
      delay: (4 - index) * 100,
    }));
  };

  return (
    <div className="flex">
      <MenuAlt2Icon
        onClick={moveNavBar}
        className="fixed right-0 mt-12 mr-12 h-10 w-10 text-amber-500 "
      />
      {bg_colors.map((color: string, idx: number) => {
        return (
          <animated.div
            key={idx}
            style={{ ..._springs[idx] }}
            className={`fixed w-screen h-screen z-${(idx + 1) * 10} ${color}`}
          />
        );
      })}

      <animated.div
        style={{ ..._springs[bg_colors.length] }}
        className="fixed w-3/4 h-screen z-40 bg-teal-100 "
      >
        <ArrowRightIcon
          onClick={revertNavBar}
          className="fixed left-0 mt-12 ml-12 h-20 w-20 text-amber-800 "
        />

        <div className="fixed flex flex-col justify-center mt-40 w-1/2 ">
          {sideMenuValues.map((menu_text: Record<string, string>, idx: number) => {
            return (
              <div
                key={menu_text.value}
                onClick={() => setView(menu_text.value)}
                className="text-7xl font-thin text-center py-5 w-full hover:font-bold hover:text-white hover:rounded-r-full hover:bg-main-bg hover:border-y-2 "
              >
                <span
                  onMouseEnter={customMouseEnter}
                  onMouseLeave={customMouseLeave}
                >
                  {menu_text.name}
                </span>
              </div>
            );
          })}
        </div>
      </animated.div>
    </div>
  );
}

export default NavBarComponent;
