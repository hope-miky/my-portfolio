import React from "react"
import NavBarView from "../components/NavBar"
import LandingPageView from "./landing_page/LandingPage"
import '../assets/css/index.css'
import AboutMeView from "./about_me/AboutMe"
import WorkExperiencePage from "./work_experience/WorkExperiencePage"

// markup
const IndexPage = () => {

  return <div className="nonscroll" >
            <NavBarView />
            <LandingPageView />
            <AboutMeView />
            <WorkExperiencePage />
        </div>
  
}

export default IndexPage
