import React from "react"



export interface IProject {
    name: string,
    description: string,
    details: any,
    frameworks: Array<string>
}


const projects: Array<IProject> = [

    {
        name: "Case Manager",
        description: " Case manager is a web app to manage fraud transactions and take actionn. It is being used by Equity bank fraud analysts.",
        details: <>I contributed to  <span className="text-teal-300"> Case Manager </span> while working as a Backend developer at <span className="text-teal-300"> Equity Bank Limited </span>. I was able to assist my team as a Django backend developer and letter I was able to re-design the web app from scratch using React TypeScript.
                    Working on Case Manager I was able to get a good working experience on tech stacks like <span className="text-teal-300"> Django, Celery, Redis, React, Docker, SupperVisor</span> ...
                    </>,
        frameworks: [ 'Django', 'Celery', 'ReactJS' ]
    },
    {
        name: "USSD Menu Manager UI",
        description: "USSD Menu is a management UI for menus used in Equity Bank mobile banking system. ",
        details: "",
        frameworks: [ 'Django', 'Bootstrap', 'ReactJS' ]
    },
    {
        name: "USSD Mobile Banking",
        description: "USSD Mobile banking system for Equity bank customers in Kenya/Uganda/South Sudan.",
        details: "",
        frameworks: [ 'Djanog', 'Docker', 'Kubernetes', 'MSSQL']
    },

    {
        name: "PICO",
        description: "PICO is a private project made for Equity bank, Kenya to support the bank to calculate loan limits for its customers.",
        details: "",
        frameworks: [ 'Djanog', 'Docker', 'VueJS']
    },
    {
        name: "ASTRA ERP",
        description: "A Web + Mobile ERP application to enable garment industries record and track employee performance, line efficiency, attendance, and order status in real-time.",
        details: "",
        frameworks: [ 'LoopbackJS', 'VueJS', 'C++']
    },
    {
        name: "TME EDU ARD V2",
        description: "User manual for TME Education Arduino board to give some information about how to use the board and to enable them to program the board from the app itself.",
        details: "",
        frameworks: [ 'Flutter', 'C#']
    },
    {
        name: "Tokenhead",
        description: "A crypto, NFT collection wallet tracking application which is connected to an API.",
        details: "",
        frameworks: [ 'Flutter']
    },
    {
        name: "MidYaf",
        description: "Real-time hostess and cleaning service booking system made using Flutter for mobile and Laravel for the backend.",
        details: "",
        frameworks: [ 'Flutter']
    },


]

export default projects