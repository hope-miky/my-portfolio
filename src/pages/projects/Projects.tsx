
import { StaticImage } from 'gatsby-plugin-image'
import React, { useEffect, useState } from 'react'
import { withPrefix } from 'gatsby';
import projects, { IProject } from './project_data';
import { FolderIcon, LinkIcon, EyeIcon } from '@heroicons/react/outline'
import MyModal from './ProjectDetails';



const ProjectsView = () => {

    const main_project_class = ""
    const [scroll, setScroll] = useState(0)

    useEffect(() => {
        window.addEventListener('scroll', (event: any) => {
          console.log(window.scrollY);
          setScroll(window.scrollY)
        });
    }, [])

   return  <div className="main-bg py-3">
                <div className="flex-col align-middle mx-12">
                        <div className="flex justify-center mb-2">
                            <button className=" mt-5 text-bold text-white font-sans text-xl mx-4 land2"> <span className="text-teal-400 font-bold mr-2">100.</span> Projects I was a part of</button>
                        </div>
                        <div className="flex justify-center">
                            <hr className=' w-1/4 ' />
                        </div>

                        <div className="flex justify-center">
                            <div className="flex maxwidthlimit flex-wrap mt-3 mx-auto  lg:mx-44 ">
                                {
                                    projects.map((project: IProject, idx: number) => {
                                        return <div key={idx} className="main2-bg lg:w-96 mx-3  my-5  hover:-translate-y-2 rounded-md bg-opacity-25 p-3 backdrop-blur-md">
                                                <div className="flex justify-between">
                                                    <FolderIcon className="h-10 w-10 mx-2 text-teal-500 " />
                                                    <div className="flex">
                                                        <LinkIcon className="h-6 w-6 mx-2 text-gray-400 hover:text-teal-400 hover:cursor-pointer " />
                                                        <MyModal title={project.name} description={project.details} />
                                                    </div>
                                                </div>
                                                <p className=' flex justify-center text-gray-300 text-xl mb-4'> {project.name} </p>
                                                <p className=' flex justify-center mx-auto text-justify text-gray-300 text-sm font-sans w-5/6 mb-4 h-24 text-clip overflow-hidden'> 
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
   </div>
}

export default ProjectsView