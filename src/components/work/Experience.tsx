import { animated, useSprings } from "@react-spring/web"
import React from "react"
import work_data from "./work_data"

const ExperiencePageView = ({ scroll_value }: any) => {

    const [springs, apis] = useSprings(
        work_data.length + 1,
        (index) => ({
            from: {
                opacity: 0,
                y: -100,
                z: -100
            }
        })
    )

    if (scroll_value > 1200 && scroll_value < 1800) {
        apis.start( (index) => ({
            to: {
                opacity: 1,
                y: 0
            },
            delay: index * 100
        }))
    } else {
        apis.start( (index) => ({
            to: {
                opacity: 0,
                y: -100
            },
            delay: index * 150
        }))
    }

    return <div className=" first-screen sm:h-screen pb-36  main-bg" id="experiencepage" >
            <animated.div style={{...springs[0]}}>
                <button className="mt-5 ml-12 text-bold text-white font-sans text-4xl font-bold uppercase sm:text-5xl "> <span className="text-teal-400 font-bold mr-2">010.</span> Experience </button>
                <hr className=' sm:w-1/2 w-5/6 sm:mt-2' />
            </animated.div>

            <div className=" h-full w-screen flex flex-wrap flex-col justify-center mt-24 sm:mt-0">
                <div className="flex flex-wrap justify-center ">
                    {
                        springs.map((_, idx: number) => {
                            if (idx < work_data.length) {
                                return <animated.div key={idx} className=" m-12 w-full sm:w-auto" style={{...springs[idx +1]}}>
                                                    <div className="text-teal-400 text-8xl">0{idx+1}</div>
                                                    <div className="text-gray-400 text-3xl">{work_data[idx].name}</div>
                                                    <div className="text-teal-700 text-lg">{work_data[idx].title}</div>
                                                    <div className="text-gray-600">{work_data[idx].time}</div>
                                    </animated.div>
                            } else{
                                return <></>
                            }
                        })
                    }
                </div>
            </div>


        </div>

}

export default ExperiencePageView


