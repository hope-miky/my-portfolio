import React from "react"
import NavBarView from "./common/NavBar"
import LandingPageView from "./landing_page/LandingPage"
import '../assets/css/index.css'
import AboutMeView from "./about_me/AboutMe"

// markup
const IndexPage = () => {

  return <div className="nonscroll" >
            <NavBarView />
            <LandingPageView />
            <AboutMeView />
        </div>
  
}

export default IndexPage
