// import React, { useEffect } from "react"
import * as React from "react"
import AboutMeView from "../components/about_me/AboutMe"
import LandingPageView from "../components/landing_page/LandingPage"
import NavBarView from "../components/NavBar"
import ProjectsView from "../components/projects/Projects"
import ExperiencePageView from "../components/work/Experience"
import ContactsPageView from "../components/contacts/contacts"
import SEO from "../components/seo/seo"

const IndexPage = () => {



  return <div className="" >
            <SEO />
            <NavBarView />
            <LandingPageView />
            <AboutMeView />
            <ExperiencePageView />
            <ProjectsView />
            <ContactsPageView />
        </div>
  
}

export default IndexPage
