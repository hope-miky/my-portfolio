
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { withPrefix } from 'gatsby';
import projects, { IProject } from './project_data';
import { FolderIcon, LinkIcon,  } from '@heroicons/react/outline'



const ProjectsView = () => {

    

   return  <div className="main-bg py-3">
                <div className="flex-col mx-12">
                        <button className=" mt-5 text-bold text-white font-sans text-xl mx-4  land2"> <span className="text-teal-400 font-bold mr-2">100.</span> Projects </button>
                        <hr className='ml-4 w-1/4 mb-10 ' />
                        
                        <div className="flex flex-wrap">

                        {
                            projects.map((project: IProject, idx: number) => {
                                return <div key={idx} className="main2-bg lg:w-1/4  my-4 mx-12 hover:-translate-y-2 rounded-md bg-opacity-25 p-3">
                                        <div className="flex justify-between">
                                            <FolderIcon className="h-10 w-10 mx-2 text-teal-500 " />
                                            <div className="flex">
                                                <LinkIcon className="h-6 w-6 mx-2 text-gray-400 hover:text-teal-400 " />
                                                <FolderIcon className="h-6 w-6 mx-2 text-gray-400 hover:text-teal-400 " />
                                            </div>
                                        </div>
                                        <p className=' flex justify-center text-gray-300 text-xl mb-4'> {project.name} </p>
                                        <p className=' flex justify-center mx-auto text-justify text-gray-300 text-sm font-thin w-5/6 mb-4 h-24 text-clip overflow-hidden'> 
                                            {project.description}
                                        </p>
                                        <p className=' flex justify-center mx-auto text-justify text-gray-400 text-sm font-mono w-5/6 mb-4'> 
                                            { project.frameworks.map((frame, idx) => <span className='mx-2'> {frame} </span>) }
                                        </p>
                                </div>
                            })
                        }

                        </div>
                </div>
   </div>
}

export default ProjectsView