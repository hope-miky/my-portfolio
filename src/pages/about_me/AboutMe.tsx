
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { withPrefix } from 'gatsby';

const AboutMeView = () => {

   return  <div className='main-bg h-screen flex'>

                <div className="text bg-red-400 flex-1"></div>
                <div className="flex-1 relative z-0">
                        {/* <p className="italic text-bold bd-red-100 font-serif text-white">Map</p> */}
                        <div className=' w-96 h-96 rounded-full bg-teal-700 mt-52 ml-44'></div>

                        <div className="absolute inset-0 z-10 pl-28 ">
                            <StaticImage className='profile-img '  style={{'width': '45%'}} src="../../assets/images/profile3.png" alt="A dinosaur" />
                        </div>

                        <div className="absolute inset-0 z-9 pl-28 ">
                                <StaticImage className='cover-img cover-img w-16 h-16 rounded-full  bg-white p-9 ml-64'   src="../../assets/images/python-logo.png" alt="A dinosaur" />
                        </div>

                        <div className="absolute inset-0 z-9 ">
                                <StaticImage className='cover-img cover-img w-16 h-16 rounded-full  bg-white p-4 border-4 border-white ml-16 mt-24'   src="../../assets/images/reacjs-logo.png" alt="A dinosaur" />
                        </div>

                </div>
   
            </div>
}

export default AboutMeView