import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { Handle, Position } from 'react-flow-renderer';
import { BeakerIcon , LinkIcon,  } from '@heroicons/react/solid'

interface INodeData {
    name: string,
    title: string,
    projects: Array<string>,
    position: Position
}

function CompanyNode( data: any ) {

    const company: INodeData = data.data

  return <div className=' w-3/4 rounded-md flex flex-col bg-teal-200 p-3 shadow-lg drop-shadow-md shadow-teal-200'>

        <div className="flex flex-col mx-3">
            <div className="flex justify-between">
                <strong className=' text-2xl font-sans text-teal-900 my-auto'>{company.name}</strong>
                <div className="flex">
                    <LinkIcon className="h-7 w-7 mx-2 text-blue-500"/>
                </div>
            </div>
            <strong className=' text-xl font-sans text-teal-600 my-auto'>{company.title}</strong>
            <strong className=' text-lg uppercase font-sans font-light text-teal-900 my-auto '> Sep 2022 - Nov 2033</strong>
        </div>

        <ul className="list-disc ml-12 mr-3 ">
            {
                company.projects.map((project, idx: number) => {
                    return <li key={idx} className=' font-sans text-lg'>{project}</li>
                })
            }
            
        </ul>

        <div className="flex my-3 overflow-hidden">
            {
                Array.from([1,3,4,7]).map( (ele) => {
                    return <div className="px-4 py-1 mx-2  font-bold border border-teal-500 rounded-full bg-teal-300 text-teal-700">
                                Django
                            </div>
                })
            }
        </div>
            
            
        {/* <Handle type="source" position={Position.Right} id="shandle" /> */}
        <Handle type="target" style={{'left': '40%'}} position={ company.position ? company.position :  Position.Top} id="thandle" />    
    </div>

  
}

export default CompanyNode; 