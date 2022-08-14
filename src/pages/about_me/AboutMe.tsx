
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

const AboutMeView = () => {

   return  <div className=' main-bg h-screen'>
                <div className='flex maxwidthlimit pb-12 mx-auto'>

                        <div className=" flex-col flex-1 pl-24 ">
                                <button className=" mt-5 text-bold text-white font-sans text-xl mx-4 land2"> <span className="text-teal-400 font-bold mr-2">001.</span> About Me </button>
                                <hr className='ml-4 mr-72' />
                                <p className=' font-sans text-gray-200 my-4 ml-3 w-3/4 text-justify '>
                                        I am Tesfamichael Molla, Software Engineer based in Poland. I am born and raised in Woldia, Ethiopia.
                                        I started my developer jounrey since highschool studying HTML and CSS and continued my BSc degree in 
                                        Electrical and Computer Engineering at Wolkite University, 2019.
                                </p>
                                <p className=' font-sans text-gray-200 my-4 ml-3 w-3/4 text-justify '>
                                        I started my first job as <span className='text-teal-200 font-bold'>TME Education Ambassador</span> (2018) at a Polish company called TME, I gave practical workshops and trainings for over 3,500 students in Ethiopia.
                                        I continued to be partnered with 2 Garment spacialists to start a startup callled Poshak Consultancy Services PLC, to which I served as a <span className='text-teal-200 font-bold'>CTO</span> for a year working on 
                                        SaSS Based ERP Platfor for garment industries. After I left Poshak I continued to persue my dream, to be a full time freelancer. Now I am working as a <span className='text-teal-200 font-bold'> Mid-Level Backend Developer </span>  
                                        for one of the fastest growing bank in Africa, Equity Bank Limited.
                                </p>
                                <p className=' font-sans text-gray-200 my-4 ml-3 w-3/4 text-justify '>
                                        As a freelancer I started my journey by conributing to a job market search application for Gost developers, Pakistan as a Flutter developer. 
                                        Continued to work on WAX NFT and wallet manager app for Token Wave, USA. Now I am working as a <span className='text-teal-200 font-bold'> Mid-Level Backend Developer </span>  
                                        for one of the fastest growing bank in Africa, Equity Bank Limited.
                                </p>
                        </div>
                        <div className="flex-1  justify-center flex flex-col">
                                <StaticImage className='ml-16 w-64 border border-teal-500 p-12 border-spacing-10 hover:bg-teal-900  ' src="../../assets/images/profile3.png" alt="A dinosaur" />
                        </div>

                </div>
   </div>
}

export default AboutMeView