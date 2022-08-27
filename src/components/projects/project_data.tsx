import React from "react"



export interface IProject {
    name: string,
    description: string,
    details?: any,
    frameworks: Array<string>,
    link?: string,
}


const projects: Array<IProject> = [

    {
        name: "Case Manager",
        description: " Case manager is a web app to manage fraud transactions and take action. It is being used by Equity bank fraud analysts.",
        details: <>I contributed to  <span className="text-teal-300"> Case Manager </span> while working as a Backend developer at <span className="text-teal-300"> Equity Bank Limited </span>. I was able to assist my team as a Django backend developer and letter I was able to re-design the web app from scratch using React TypeScript.
                    Working on Case Manager I was able to get a good working experience on tech stacks like <span className="text-teal-300"> Django, Celery, Redis, React, Docker, SupperVisor</span> ...
                    </>,
        frameworks: [ 'Django', 'Celery', 'ReactJS' ]
    },
    {
        name: "USSD Menu Manager UI",
        description: "USSD Menu is a management UI for menus used in Equity Bank mobile banking system. ",
        details: <>I contributed to USSD Menu from idea to development and it was my first React project. I used <span className="text-teal-300"> React 18 with TypeScript </span>  for the frontend and <span className="text-teal-300"> Django </span> for the backend.</>,
        frameworks: [ 'Django', 'Bootstrap', 'ReactJS' ]
    },
    {
        name: "USSD Mobile Banking",
        description: "USSD Mobile banking system for Equity bank customers in Kenya/Uganda/South Sudan.",
        details: <> I am contributing to Equity Bank's Mobile banking system as a backend developer. I am working on specifically the <span className="text-teal-300"> Ecosystem loan, Menu Shortcuts and General Purpose Loan </span> services. 
        I also develop a universal logging service or our microservice using <span className="text-teal-300"> Apache Kafka </span>. I am currently an active contributor and will continue adding new features to the service. </>,
        frameworks: [ 'Djanog', 'Docker', 'Kubernetes', 'MSSQL']
    },

    {
        name: "PICO",
        description: "PICO is a private project made for Equity bank, Kenya to support the bank to calculate loan limits for its customers.",
        details: <>I contributed to PICO as a backend developer from concept to implementation. We used Django and VueJs to develop the system and currently its being used by the bank and its customers.</>,
        frameworks: [ 'Djanog', 'Docker', 'VueJS']
    },
    {
        name: "ASTRA ERP",
        description: "A Web + Mobile ERP application to enable garment industries record and track employee performance, line efficiency, attendance, and order status in real-time.",
        details: <>ASTRA ERP is one of my proudest accomplishments as a developer. I was managing ASTRA ERP development both as a <span className="text-teal-300"> CTO </span>  and <span className="text-teal-300"> full-stack developer </span> .
        It was one of a kind ERP application for the garment industry that was made from scratch using <span className="text-teal-300"> LoopBackJS </span> and <span className="text-teal-300"> VueJS </span>.
        With the same partners I was working with we were also able to publish a paper on InderScience on <span className="text-teal-300"> "Cost Effective Cut Order Planning" </span> to which I
        contributed by developing a python <span className="text-teal-300"> desktop application </span> to calculate the area of irregular shapes in <span className="text-teal-300"> real-time from a camera </span>.</>,
        frameworks: [ 'LoopbackJS', 'VueJS', 'C++']
    },
    {
        name: "TME EDU ARD V2",
        description: "User manual for TME Education Arduino board to give some information about how to use the board and to enable them to program the board from the app itself.",
        details: <> This was a project I was experimenting in while I was working as an ambassador for TME. I was a mobile application to teach our clients/students 
        about our product. I has all the content of the user manual in an interactive way but the two big feature I did on this app was one, to enable our students to
        <span className="text-teal-300"> program their Arduino board from the mobile application itself.</span> There were plenty of code samples in the app the students can experiment in. and the second one is 
        for students to be able to follow up our <span className="text-teal-300">YouTube channel and video tutorials from app.</span> I finished this project as a side project and published the V1 to PlayStore  
        V2 was not published because of some Privacy and access issues since the app includes sending compiled binary files through USB ports, but the code is available 
        in my GitHub profile.</>,
        frameworks: [ 'Flutter', 'C#', 'Java'],
        link: "https://github.com/Tesfamichael1074/TME-Education-Arduino-board-manual"
    },
    {
        name: "Tokenhead",
        description: "A crypto, NFT collection wallet tracking application which is connected to an API.",
        details: <> My second and last freelance project on UpWork. I was able to work on this very interesting project, specifically on updating the mobile app UI to a new pre-designed version.
        This project helped me understand a lot of Dart specific functionalities, also it was one of the cleanest codes I have ever seen {'( Really appreciate the previous developers )'}.</>,
        frameworks: [ 'Flutter'],
        link: "https://tokenhead.io"
    },
    {
        name: "MidYaf",
        description: "Real-time hostess and cleaning service booking system made using Flutter for mobile and Laravel for the backend.",
        frameworks: [ 'Flutter']
    },
    {
        name: "AddisOCR",
        description: "Hand writing recognition desktop application for our local language Amharic (Ethiopia), It accepts images and returns the text/translate to any language",
        frameworks: [ 'Python', 'PyQt', 'Tesseract']
    },
    {
        name: "Flutter-Ecom",
        description: "Open source mobile application UI for e-commerce platforms",
        details: <>A side project of mine when I was a working on Flutter projects as a freelancer. I was planning to deliver the project for all device like Desktop and Web but did get the time to push it.</>,
        frameworks: [ 'Flutter' ]
    },


]

export default projects