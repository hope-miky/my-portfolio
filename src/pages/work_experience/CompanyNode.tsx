import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { Handle, Position } from 'react-flow-renderer';

interface INodeData {
    name: string,
    title: string,
    projects: Array<string>
}

function CompanyNode( data: any ) {

    const company: INodeData = data.data

  return <div className=' w-3/4 rounded-md flex flex-col bg-teal-400 p-3'>

        <div className="flex">
            {/* <StaticImage className=' rounded-lg w-1/12 mr-3' src="../../assets/images/django-logo.png" alt="A dinosaur" /> */}
            <strong className=' text-xl text-teal-900 my-auto'>{company.name}</strong>
        </div>

        <ul className="list-disc mx-5 ">
            {
                company.projects.map((project, idx: number) => {
                    return <li key={idx} className=' font-sans text-md'>{project}</li>
                })
            }
            
        </ul>
            
            
        {/* <Handle type="source" position={Position.Right} id="shandle" /> */}
        <Handle type="target" position={Position.Top} id="thandle" />    
    </div>

  
}

export default CompanyNode; 