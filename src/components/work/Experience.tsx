import React from "react"
import work_data from "./work_data"

const ExperiencePageView = () => {

    return <div className=" first-screen sm:h-screen pb-36  main-bg" id="experiencepage" >
            
            <button className="mt-5 ml-12 text-bold text-white font-sans text-4xl font-bold uppercase sm:text-5xl land2"> <span className="text-teal-400 font-bold mr-2">010.</span> Experience </button>
            <hr className=' sm:w-1/2 w-5/6 sm:mt-2' />

            <div className=" h-full flex flex-wrap flex-col justify-center mt-24 sm:mt-0">
                <div className="flex flex-wrap justify-center ">
                    {
                        work_data.map((work: any, idx: number) => {
                            return <div key={idx} className=" m-12 w-full sm:w-auto land5">
                                            <div className="text-teal-400 text-8xl">0{idx+1}</div>
                                            <div className="text-gray-400 text-3xl">{work.name}</div>
                                            <div className="text-teal-700 text-lg">{work.title}</div>
                                            <div className="text-gray-600">{work.time}</div>
                                    </div>
                        })
                    }
                </div>
            </div>


        </div>

}

export default ExperiencePageView


