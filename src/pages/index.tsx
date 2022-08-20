// import React, { useEffect } from "react"
import * as React from "react"
import AboutMeView from "../components/about_me/AboutMe"
import LandingPageView from "../components/landing_page/LandingPage"
import NavBarView from "../components/NavBar"
import ProjectsView from "../components/projects/Projects"
import ExperiencePageView from "../components/work/Experience"

const IndexPage = () => {



  return <div className="" >
            <NavBarView />
            <LandingPageView />
            <AboutMeView />
            <ExperiencePageView />
            <ProjectsView />
        </div>
  
}

export default IndexPage
