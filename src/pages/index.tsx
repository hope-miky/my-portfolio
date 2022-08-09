import React from "react"
import NavBarView from "../components/NavBar"
import LandingPageView from "./landing_page/LandingPage"
import '../assets/css/index.css'
import AboutMeView from "./about_me/AboutMe"
import WorkExperiencePage from "./work_experience/WorkExperiencePage"
import ProjectsView from "./projects/Projects"

// markup
const IndexPage = () => {

  return <div className="nonscroll" >
            <NavBarView />
            <LandingPageView />
            <AboutMeView />
            <WorkExperiencePage />
            <ProjectsView />
        </div>
  
}

export default IndexPage
