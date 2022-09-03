// import React, { useEffect } from "react"
import * as React from "react"
import AboutMeView from "../components/about_me/AboutMe"
import LandingPageView from "../components/landing_page/LandingPage"
import NavBarView from "../components/NavBar"
import ProjectsView from "../components/projects/Projects"
import ExperiencePageView from "../components/work/Experience"
import ContactsPageView from "../components/contacts/contacts"
import SEO from "../components/seo/SEO"

const IndexPage = () => {



  return <div className="" >
            <SEO
              title="Tesfamichael"
              description="Tesfamichael's portfolio website."
              featuredImage= {
                {
                  images: {
                      fallback: {
                          src: "https://tesfamichael.dev/screen.png"
                      },
                  },
                  width: 120,
                  height: 210,
              }
              }
            />
            {/* <div className="p bg-red-300 text-center font-mono text-sm font-bold"> Please note that my portfolio is still under development, for now :) </div> */}
            <NavBarView />
            <LandingPageView />
            <AboutMeView />
            <ExperiencePageView />
            <ProjectsView />
            <ContactsPageView />
        </div>
  
}

export default IndexPage
