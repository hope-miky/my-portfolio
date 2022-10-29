// import React, { useEffect } from "react"
import  React, {useEffect} from "react"
import AboutMeView from "../components/about_me/AboutMe"
import LandingPageView from "../components/landing_page/LandingPage"
import NavBarView from "../components/NavBar"
import ProjectsView from "../components/projects/Projects"
import ExperiencePageView from "../components/work/Experience"
import ContactsPageView from "../components/contacts/contacts"
import Seo from "../components/seo/SeoComponent"
import DesignView from "../components/design_view/DesignView"

import '../assets/css/index.css'

const IndexPage = () => {

  return <div className="cont" >
            <Seo
              title="Tesfamichael Molla"
              description="Hello, I am Tesfamichael Molla, BH Full-stack developer based in Poland."
              featuredImage= {
                {
                  images: {
                      fallback: {
                          src: "https://tesfamichael.dev/screen.png"
                      },
                  },
                  width: 12,
                  height: 21,
              }
              }
            />
            {/* <NavBarView /> */}
            <LandingPageView />
            <AboutMeView />
            <ExperiencePageView />
            {/* <DesignView /> */}
            <ProjectsView />
            <ContactsPageView />
        </div>
  
}

export default IndexPage
