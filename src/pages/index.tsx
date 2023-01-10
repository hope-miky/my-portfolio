import * as React from "react";
import AboutMeView from "../components/about_me/AboutMe_web";
import LandingPageView from "../components/landing_page/LandingPage";
import ContactsPageView from "../components/contacts/contacts";
import Seo from "../components/seo/SeoComponent";
import NavBarComponent from "./_nav_bar";
import DarkModeToggle from "react-dark-mode-toggle";
import ExperiencePageView from "../components/work/Experience";
import ProjectsView from "../components/projects/Projects";

const IndexPage = () => {
  const [view, setView] = React.useState("home");
  const [darkMode, setDarkMode] = React.useState(false);

  const setDarkModeLocal = (new_value: boolean) => {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.theme = "light";
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "dark";
      setDarkMode(false);
    }
  };

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

      <NavBarComponent setView={setView} />

      <div className="fixed w-9 h-9 right-40 top-3">
        <DarkModeToggle
          onChange={setDarkModeLocal}
          checked={darkMode}
          size={80}
        />
      </div>

      <LandingPageView view={view} setView={setView} />

      <AboutMeView view={view} />
      <ExperiencePageView view={view} />
      <ProjectsView view={view} />
      <ContactsPageView view={view} />
    </div>
  );
};

export default IndexPage;
