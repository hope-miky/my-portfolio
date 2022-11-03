
import React from 'react'
import './navbar.css'
import { MenuAlt4Icon } from '@heroicons/react/outline'
import { animated, useSpring } from '@react-spring/web'


const NavBarView = ( {setView} : any) => {

  const [spring, api] = useSpring(() => ({
    from: {
        y: 0,
        opacity: 1,
    }
}))

  const animteText = () => {
      api.start(() => ({
        to: {
            y: -20,
            opacity: 0,
        },
    }));
      api.start(() => ({
        to: {
            y: 40,
            opacity: 0,
        },
        delay: 400
    }));
    api.start(() => ({
      to: {
          y: 0,
          opacity: 1,
      },
      delay: 800
  }));
  
  }

  const closeNav = () => {
    document.getElementById("mySidenav")!.style.width = "0";
  }

  const openNav = () => {
    document.getElementById("mySidenav")!.style.width = "250px";
  }

  const openResume = () => {
    window.open('https://docs.google.com/document/d/1KQaa-Psw143yrk2yddweDUbYjTWZiLxv9w0GMqFhl4A/edit?usp=sharing', '_blank')
  }

   return  <nav className="pt-2 main-bg" >
          <div className="max-w-8xl sm:mx-12 px-2 sm:px-6 lg:px-8">

            <div className="relative  items-center justify-between h-16 hidden sm:flex  ">
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start" >
                <animated.div onMouseOver={() => animteText()} className=" text-teal-500 font-bold land2" style={{...spring}} >@hope_miky</animated.div>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <a onClick={() => setView('home')} className=" hover:cursor-pointer text-bold text-white font-sans text-sm mx-4 land2"> <span className="text-teal-400 font-bold mr-2">000.</span> Home </a>
                <a onClick={() => setView('about')} className=" hover:cursor-pointer text-bold text-white font-sans text-sm mx-4 land2"> <span className="text-teal-400 font-bold mr-2">001.</span> About Me </a>
                <a onClick={() => setView('experience')} className=" hover:cursor-pointer text-bold text-white font-sans text-sm mx-4 land3"> <span className="text-teal-400 font-bold mr-2">010.</span> Experience </a>
                <a onClick={() => setView('projects')} className=" hover:cursor-pointer text-bold text-white font-sans text-sm mx-4 land4"> <span className="text-teal-400 font-bold mr-2">011.</span> Projects </a>
                <a onClick={() => setView('contacts')} className=" hover:cursor-pointer text-bold text-white font-sans text-sm mx-4 land5"> <span className="text-teal-400 font-bold mr-2">100.</span> Contacts </a>
                <button onClick={openResume} className="land5 inline-flex items-center px-6 py-2 ml-5 border border-teal-300 rounded-md shadow-sm text-sm font-medium text-white  hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"> Resume</button>
              </div>
            </div>

            <div className="items-center justify-between h-16 sm:hidden flex  ">
              <div className="flex-1 flex items-center justify-start sm:items-stretch pl-5 sm:pl-0">
                <div className=" text-teal-500 font-bold land2">@hope_miky</div>
              </div>

              <div className=" inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button onClick={openNav} className="land5 inline-flex items-center px-3 py-1 ml-5 border border-teal-300 rounded-md shadow-sm text-sm font-medium text-white  hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
                  <MenuAlt4Icon className="h-6 w-6 text-teal-300 " />
                </button>
              </div>
            </div>

            <div id="mySidenav" className="sidenav backdrop-blur-sm bg-main-teal">
              <a className="closebtn text-teal-500" onClick={closeNav}>&times;</a>
              <div className=" flex flex-col inset-y-0 right-0 pl-5 items-start pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <a onClick={() => setView('home')} className="hover:cursor-pointer text-bold text-white font-sans text-sm my-4 land2"> <span className="text-teal-400 font-bold mr-2">000.</span> Home </a>
                    <a onClick={() => setView('about')} className="hover:cursor-pointer text-bold text-white font-sans text-sm my-4 land2"> <span className="text-teal-400 font-bold mr-2">001.</span> About Me </a>
                    <a onClick={() => setView('experience')} className="hover:cursor-pointer text-bold text-white font-sans text-sm my-4 land3"> <span className="text-teal-400 font-bold mr-2">010.</span> Experience </a>
                    <a onClick={() => setView('projects')}  className="hover:cursor-pointer text-bold text-white font-sans text-sm my-4 land4"> <span className="text-teal-400 font-bold mr-2">011.</span> Projects </a>
                    <a onClick={() => setView('contacts')}  className="hover:cursor-pointer text-bold text-white font-sans text-sm my-4 land4"> <span className="text-teal-400 font-bold mr-2">100.</span> Contacts </a>
                    <button onClick={openResume} className="land5 px-6 py-2 mt-5 border border-teal-300 rounded-md shadow-sm text-sm font-medium text-white  hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"> Resume</button>
                </div>
            </div>

          </div>
    </nav>

}

export default NavBarView