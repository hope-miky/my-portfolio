import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { Handle, Position } from 'react-flow-renderer';

interface INodeData {
    name: string,
    title: string,
    projects: Array<string>
}

function TitleNode( data: any ) {

    const company: INodeData = data.data

  return <div className=' w-3/4 rounded-md flex flex-col p-3'>

        <button className=" mt-5 text-bold text-white font-sans text-xl"> <span className="text-teal-400 font-bold mr-2">011.</span> Wrok Experience </button>
        <hr className='ml-4 mr-72 bg-teal-400' />
    
        {/* <Handle type="source" position={Position.Right} id="shandle" /> */}
        <Handle type="source" position={Position.Bottom} style={{'left': '40%'}} id="thandletitle" />    
    </div>

}

export default TitleNode; 