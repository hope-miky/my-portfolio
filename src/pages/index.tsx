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

    // const handleScroll = (e: any) => {
    //   // const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    //   // if (bottom) { 
    //   //   console.log("reached bottom");
    //   //  }
    //   console.log(window.scrollY);
    // setScroll(window.scrollY)
    // }



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
            <div className=" fixed z-0">
                <LandingPageView scroll_value={scroll_value} />
            </div>

            {
              scroll_value > 400 && 
              <div className="fixed z-10">
                    <AboutMeView scroll_value={scroll_value} />
              </div>
            }

            {
              scroll_value > 800 &&
              <div className="fixed z-20">
                  <ExperiencePageView scroll_value={scroll_value} />
              </div>
            }

            {
                scroll_value > 1800 &&
                <div className="fixed z-30">
                  <ProjectsView scroll_value={scroll_value} />
                </div>
            }
            

              {
                scroll_value > 3300 &&
                  <ContactsPageView scroll_value={scroll_value} />
              }

            

            <div className="absolute  w-screen -z-10" style={{ height: 6000}}>

            </div>
            
            {/* 
             */}
        </div>
  
}

export default IndexPage
