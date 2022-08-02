import React from "react"
import './sample.css'

const someclass = `
    sm:text-3xl md:text-5xl lg:text-7xl font-bold font-sans text-gray-200 md:my-1 land2
    `

const LandingPageView = () => {

    return <div className=" first-screen h-screen pb-36 flex flex-wrap flex-col justify-center" style={{'backgroundColor': 'rgb(11,25,46)'}}>
            
            <div className=" w-3/5 mx-auto">
                <div className="font-mono text-xl ml-5 text-teal-400 my-2 land"> Hi :) I am </div>
                <div className={someclass}> Tesfamichael Molla </div>
                <div className="lg:text-7xl md:text-4xl sm:text-3xl text-gray-400 font-sans font-bold my-4 land3 md:my-1"> I build things for the web! </div>
                <div className=" sm:text-xs md:text-sm lg:text-lg text-gray-400 w-3/5 font-thin font-mono my-4 land4"> 
                    I am a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at Upstatement. 
                </div>
                <div className=" land5"> 
                    <button type="button" className="inline-flex items-center px-12 py-4 border border-teal-300 rounded-md shadow-sm text-sm font-medium text-white  hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">Contact me</button>
                </div>
            </div>

        </div>

}

export default LandingPageView

