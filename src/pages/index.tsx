// import React, { useEffect } from "react"
import * as React from "react"
import AboutMeView from "../components/about_me/AboutMe"
import LandingPageView from "../components/landing_page/LandingPage"
import NavBarView from "../components/NavBar"
import ProjectsView from "../components/projects/Projects"
import ExperiencePageView from "../components/work/Experience"
import ContactsPageView from "../components/contacts/contacts"
import Seo from "../components/seo/SeoComponent"

const IndexPage = () => {


  const [scroll_value, setScroll] = React.useState(0)

    React.useEffect(() => {
        window.addEventListener('scroll', (event: any) => {
          console.log(window.scrollY);
          setScroll(window.scrollY)
        });
    }, [])



  return <div className="" >
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
            {/* <div className="p bg-red-300 text-center font-mono text-sm font-bold"> Please note that my portfolio is still under development, for now :) </div> */}
            <NavBarView />
            <LandingPageView />
            <AboutMeView scroll_value={scroll_value} />
            <ExperiencePageView />
            <ProjectsView />
            <ContactsPageView />
        </div>
  
}

export default IndexPage
