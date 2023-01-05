import * as React from "react";
import AboutMeView from "../components/about_me/AboutMe";
import LandingPageView from "../components/landing_page/LandingPage";
import ProjectsView from "../components/projects/Projects";
import ExperiencePageView from "../components/work/Experience";
import ContactsPageView from "../components/contacts/contacts";
import Seo from "../components/seo/SeoComponent";
import { animated, useSpring } from "@react-spring/web";
import { onMouseEvent } from "./_helper_functions";
import NavBarComponent from "./_nav_bar";
import { Link } from "gatsby"

const IndexPage = () => {
  const [view, setView] = React.useState("home");
  const [cursorPosition, setCursorPosition] = React.useState({
    x: 0,
    y: 0,
  });

  const [cursorVariant, setCursorVariant] = React.useState("default");

  const [_mouseSprings, _mouseApi] = useSpring(() => ({
    from: {
      height: 36,
      width: 36,
      x: 0,
      y: 0,
      backgroundColor: "white",
      mixBlendMode: "normal",
    },
  }));

  const mouseEventListener = (e: any) =>
    setCursorPosition({
      x: e.clientX,
      y: e.clientY,
    });

  React.useEffect(() => {
    onMouseEvent(_mouseApi, cursorVariant, cursorPosition);
  }, [cursorPosition]);

  React.useEffect(() => {
    window.addEventListener("mousemove", mouseEventListener);
    return () => {
      window.removeEventListener("mousemove", mouseEventListener);
    };
  }, []);

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  const menuTextEnter = () => setCursorVariant("menutext");
  const menuTextLeave = () => setCursorVariant("default");

  return (
    <div className="">
      <Seo
        title="Tesfamichael Molla"
        description="Hello, I am Tesfamichael Molla, BH Full-stack developer based in Poland."
        featuredImage={{
          images: {
            fallback: {
              src: "https://tesfamichael.dev/screen.png",
            },
          },
          width: 12,
          height: 21,
        }}
      />

      {/* <NavBarView setView={setView} /> */}
      <animated.div
        style={{ ..._mouseSprings }}
        className="fixed z-50 rounded-full pointer-events-none"
      ></animated.div>

      <NavBarComponent
        customMouseEnter={menuTextEnter}
        customMouseLeave={menuTextLeave}
      />

      <LandingPageView
        view={view}
        setView={setView}
        customMouseEnter={textEnter}
        customMouseLeave={textLeave}
      />

      <AboutMeView view={view} />
      {/* <ExperiencePageView view={view} /> */}
      {/* <ProjectsView view={view} /> */}
      <ContactsPageView view={view} />
    </div>
  );
};

export default IndexPage;
