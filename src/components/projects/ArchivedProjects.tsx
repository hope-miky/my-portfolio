
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { withPrefix } from 'gatsby';

interface IProject {
    name: string,
    description?: string,
}


const ArchivedProjectsView = () => {

    const projects: Array<IProject> = [

        {
            name: "Sample Project",
            description: ""
        },
        {
            name: "Sample Project",
            description: ""
        },
        {
            name: "Sample Project",
            description: ""
        },

    ]

   return  <div className="main-bg py-3 h-screen">
                <div className="flex-col mx-12">
                        <button className=" mt-5 text-bold text-white font-sans text-xl mx-4  land2"> <span className="text-teal-400 font-bold mr-2">100.</span> Projects </button>
                        <hr className='ml-4 w-1/4 mb-10 ' />
                        
                        {
                            projects.map((project: IProject, idx: number) => {
                                return <div key={idx} className="bg-teal-400 h-16 my-4 mx-12 hover:scale-y-110 rounded-md bg-opacity-25">

                                </div>
                            })
                        }
                </div>
   </div>
}

export default ArchivedProjectsView