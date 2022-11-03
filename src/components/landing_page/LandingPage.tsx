import { animated, useSpring, useSprings } from "@react-spring/web"
import React, { useEffect, useState } from "react"
import './sample.css'

const LandingPageView = ( {scroll_value, view} : any ) => {

    const [display, setDisplay] = useState(true)

    const [ first_spring, first_api] = useSprings(
        5,
        (index) => ({
            from: {
                y: -100,
                opacity: 0,
            }
        })
    )

    useEffect(() => {
        if(view === 'home') {
            setDisplay(true)
            first_api.start((index) => ({
                to: {
                    y: 0,
                    opacity: 1,
                },
                delay: index * 200
            }));
        }
        else {
            first_api.start((index) => ({
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
    
    


    return <div className=" first-screen h-screen pb-36 flex flex-wrap flex-col justify-center main-bg" >
            { display &&
            <div className=" w-4/5 sm:w-3/5 mx-auto">
            
                <animated.div style={{...first_spring[0] }}>
                    <div className="font-mono sm:text-xl sm:ml-5 text-teal-400 my-2 "> Hi :) I am </div>
                </animated.div>

                <animated.div style={{...first_spring[1] }}>
                    <div className=" text-3xl sm:text-3xl md:text-5xl lg:text-7xl font-bold font-sans text-gray-200 md:my-1"> Tesfamichael Molla </div> 
                </animated.div>

                <animated.div style={{...first_spring[2] }}>
                    <div className="text-2xl lg:text-7xl md:text-4xl sm:text-3xl text-gray-400 font-sans font-bold my-4 md:my-1"> 
                    I build <span className="text-amber-300 font-bold">apps</span> for the web! 
                    </div>
                </animated.div>

                <animated.div style={{...first_spring[3] }}>
                    <div className=" text-xs sm:text-xs md:text-sm lg:text-lg text-gray-400 sm:w-3/5 font-thin font-mono my-4"> 
                        I am a full-stack developer specializing in building customer focused web ( sometimes mobile ) applications. Currently, I’m focused on building USSD mobile banking and Fraud Management systems at Equity Bank Limited. 
                    </div>
                </animated.div>

                <animated.div style={{...first_spring[4] }}>
                    <div className=""> 
                        <a href="#contactspage" type="button" className="inline-flex items-center sm:px-12 px-6 py-2 sm:py-4 border border-teal-300 rounded-md shadow-sm text-xs sm:text-sm font-medium text-white  hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">Contact me</a>
                    </div>
                </animated.div>
                
            </div>
}
        </div>

}

export default LandingPageView


