
import { StaticImage } from 'gatsby-plugin-image'
import React, { useEffect, useState } from 'react'
import { withPrefix } from 'gatsby';
import projects, { IProject } from './project_data';
import { FolderIcon, LinkIcon, LockClosedIcon } from '@heroicons/react/outline'
import MyModal from './ProjectDetails';
import { animated, useSprings } from '@react-spring/web';



const ProjectsView = ( {scroll_value} : any) => {

    const [springs, apis] = useSprings(
        projects.length + 1,
        (index) => ({
            from: {
                opacity: 0,
                y: -100
            }
        })
    )

    if (scroll_value > 2000 && scroll_value < 2600) {
        apis.start( (index) => ({
            to: {
                opacity: 1,
                y: 0
            },
            delay: index * 50
        }))
    } else {
        apis.start( (index) => ({
            to: {
                opacity: 0,
                y: -100
            },
            delay: index * 50
        }))
    }


   return  <div className="main-bg py-3" id="projectspage">
                <div className="flex-col align-middle ">
                <animated.div style={{...springs[0]}} >
                        <button className=" ml-12 text-bold text-white font-sans text-4xl sm:text-5xl font-bold uppercase land2"> <span className="text-teal-400 font-bold mr-2">011.</span> Projects </button>
                        <hr className=' sm:w-1/2 w-5/6 sm:mt-2 lg:mt-0 sm:mb-12' />
                </animated.div>

                        <div className="flex justify-center h-screen">
                            <div className="flex maxwidthlimit flex-wrap mt-3 mx-auto  lg:mx-44 h-3/4">
                                {
                                    springs.map((_, idx: number) => {
                                        if(idx < projects.length ) {
                                            return <animated.div key={idx} style={{...springs[idx + 1]}} className="main2-bg lg:w-96 mx-3  my-5  hover:-translate-y-2 rounded-md bg-opacity-25 p-3 backdrop-blur-md">
                                                <div className="flex justify-between">
                                                    <FolderIcon className="h-10 w-10 mx-2 text-teal-500 " />
                                                    <div className="flex">
                                                        {
                                                            projects[idx].link ?
                                                                <LinkIcon onClick={() => { window.open(projects[idx].link, '_blank'); }} className="h-6 w-6 mx-2 text-gray-400 hover:text-teal-400 hover:cursor-pointer " />
                                                                : <LockClosedIcon className="h-6 w-6 mx-2 text-gray-400 hover:text-red-400 hover:cursor-pointer " />
                                                        }
                                                        <MyModal title={projects[idx].name} description={projects[idx].details} />
                                                    </div>
                                                </div>
                                                <p className=' flex justify-center text-gray-300 text-xl mb-4'> {projects[idx].name} </p>
                                                <p className=' flex justify-center mx-auto text-justify text-gray-300 text-sm font-sans w-5/6 mb-4 h-24 text-clip overflow-hidden'> 
                                                    {projects[idx].description}
                                                </p>
                                                <p className=' flex justify-center mx-auto text-justify text-gray-400 text-sm font-mono w-5/6 mb-4'> 
                                                    { projects[idx].frameworks.map((frame, idx) => <span className='mx-2'> {frame} </span>) }
                                                </p>
                                        </animated.div>
                                        } else {
                                            return <></>
                                        }
                                    })
                                }

                            </div>
                        </div>
                </div>
   </div>
}

export default ProjectsView