// import React, { useEffect } from "react"
import * as React from "react"
import AboutMeView from "../components/about_me/AboutMe"
import LandingPageView from "../components/landing_page/LandingPage"
import NavBarView from "../components/NavBar"
import ProjectsView from "../components/projects/Projects"

// import NavBarView from "../components/NavBar"
// import LandingPageView from "./landing_page/LandingPage"
// import '../assets/css/index.css'
// import AboutMeView from "./about_me/AboutMe"
// import ProjectsView from "./projects/Projects"

// markup
const IndexPage = () => {



  return <div className="nonscroll" >
            <NavBarView />
            <LandingPageView />
            <AboutMeView />
            <ProjectsView />
        </div>
  
}

export default IndexPage
