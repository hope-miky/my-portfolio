import React from "react"
import LandingPageView from "./LandingPage/LandingPage"



// markup
const IndexPage = () => {

  return <div className="">
        <nav className="pt-2" style={{'backgroundColor': 'rgb(11,25,46)'}}>
          <div className="max-w-8xl mx-12 px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className=" text-teal-500 font-bold land2">@hope_miky</div>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button className=" text-bold text-white font-sans text-sm mx-4 land2"> <span className="text-teal-400 font-bold mr-2">001.</span> About Me </button>
                <button className=" text-bold text-white font-sans text-sm mx-4 land3"> <span className="text-teal-400 font-bold mr-2">010.</span> Experience </button>
                <button className=" text-bold text-white font-sans text-sm mx-4 land4"> <span className="text-teal-400 font-bold mr-2">011.</span> Projects </button>
                <button className="land5 inline-flex items-center px-6 py-2 ml-5 border border-teal-300 rounded-md shadow-sm text-sm font-medium text-white  hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"> Resume</button>
              </div>

            </div>
          </div>
    </nav>
      <LandingPageView />
      <div className="first-screen bg-gray-500 h-screen"></div>
  </div>
  
}

export default IndexPage
