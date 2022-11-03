import { animated, useSprings } from "@react-spring/web"
import React, { useEffect, useState } from "react"
import work_data from "./work_data"

const ExperiencePageView = ({ view }: any) => {
    
    const [display, setDisplay] = useState(true)

    const [springs, apis] = useSprings(
        work_data.length + 1,
        (index) => ({
            from: {
                opacity: 0,
                y: -100,
            }
        })
    )

    useEffect(() => {
        if(view === 'experience') {
            setTimeout( () => {
                setDisplay(true)
                apis.start((index) => ({
                    to: {
                        y: 0,
                        opacity: 1,
                    },
                    delay: index * 200
                }));
            }, 800)
            
        }
        else {
            apis.start((index) => ({
                to: {
                    y: -100,
                    opacity: 0,
                },
                delay: index * 200
              }));
            setTimeout( () => {
                setDisplay(false)
            }, 800)
        }
    
    }, [view])



    return <>
    {
        display && 
        <div className=" first-screen sm:h-screen pb-36  main-bg" id="experiencepage" >
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
    </>

}

export default ExperiencePageView


