import React from "react"
// import { Gi } from '@heroicons/react/outline'
import { SocialIcon } from 'react-social-icons';

const ContactsPageView = () => {

    return <div className=" first-screen pb-36 w-screen main-bg sm:mt-24" id="contactspage" >
            
            <button className="mt-5 ml-12 text-bold text-white font-sans font-bold uppercase text-4xl sm:text-5xl land2"> <span className="text-teal-400 font-bold mr-2">100.</span> Contacts </button>
            <hr className=' sm:w-1/2 w-5/6 sm:mt-2' />
            {/* <div className="text-white bg-green-100 d-flex justify-center text-3xl">Contacts</div> */}
            
            <div className=" flex flex-wrap justify-center mt-24 ">
                <div className="flex flex-col justify-center w-full sm:w-1/4  mx-12 mb-10 ">
                    <div className="text-white text-xl land3 "> Osiedle Stare Żegrze 173 </div>
                    <div className="text-white text-xl land3 "> Poznan, Poland </div>
                    <div className="text-white text-xl land3 "> +48223072405 </div>
                    <a href="mailto:hope.mikypl@gmail.com" className=" land3 text-teal-400 text-md font-mono hover:underline hover:font-bold hover:cursor-pointer"> hope.mikypl@gmail.com </a>
                    <a href="mailto:hope.miky1074@gmail.com" className=" land3 text-teal-400 text-md font-mono hover:underline hover:font-bold hover:cursor-pointer"> hope.miky1074@gmail.com </a>
                </div>

                <div className="flex flex-col justify-center sm:w-1/3 mx-5 ">
                    <div className=" text-center mb-5 text-xl text-gray-400 font-thin land5"> I am not actively looking for a new role but I am open for discussion :) </div>
                    <div className="flex justify-center">
                        <SocialIcon className="mx-3 hover:-translate-y-1 land5" url="https://www.linkedin.com/in/tesfamichael-molla-989236171/" fgColor="white"/>
                        <SocialIcon className="mx-3 hover:-translate-y-1 land5" url="https://github.com/Tesfamichael1074" bgColor="white" />
                        <SocialIcon className="mx-3 hover:-translate-y-1 land5" url="https://twitter.com/hopemichael1074" fgColor="white"/>
                        <SocialIcon className="mx-3 hover:-translate-y-1 land5" url="https://medium.com/@hope.miky1074" bgColor="white" />
                        <SocialIcon className="mx-3 hover:-translate-y-1 land5" url="mailto:hope.mikypl@gmail.com" bgColor="red" fgColor="white" />
                    </div>
                </div>
            </div>


        </div>

}

export default ContactsPageView


