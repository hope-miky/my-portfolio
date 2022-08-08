import React, { useCallback, useState } from 'react';
import ReactFlow, {
  addEdge,
  Background,
  useNodesState,
  NodeChange,
  EdgeChange,
  useEdgesState,
  applyNodeChanges,
  applyEdgeChanges,
  Edge,
  ControlButton,
} from 'react-flow-renderer';
import { MarkerType } from 'react-flow-renderer';
import CompanyNode from './CompanyNode';
import TitleNode from './TitleNode';


const WorkExperiencePage = () => {

    const initialNodes: any = [
        {
            id: '1',
            type: 'tittleNode',
            data: {
              label: "Work Experience"
            },
            position: { x: 900, y: 0 },
          },
        {
            id: '2',
            type: 'company',
            data: {
                name: "Transfer Multisort Electronics",
                title: "TME Education Ambassador",
                projects: [
                    'Gave more than 3500 student a hands on workshop on Electronics and Computer programming.',
                    'Worked on a drone project to be used for spraying pesticides on farms'
                ]
            },
            position: { x: 100, y: 1000 },
        },  

        {
          id: '3',
          type: 'company',
          data: {
              name: "Equity Bank Limited",
              title: "Mid-Level Backend Developer",
              projects: [
                  'Gave more than 3500 student a hands on workshop on Electronics and Computer programming.',
                  'Worked on a drone project to be used for spraying pesticides on farms'
              ]
          },
          position: { x: 700, y: 300 },
      },  
      {
        id: '4',
        type: 'company',
        data: {
            name: "Equity Bank Limited",
            title: "Mid-Level Backend Developer",
            projects: [
                'Gave more than 3500 student a hands on workshop on Electronics and Computer programming.',
                'Worked on a drone project to be used for spraying pesticides on farms'
            ]
        },
        position: { x: 1300, y: 1000 },
    },  
        
      ];

      const initialEdges: Array<Edge> = [
        {
          id: '1',
          source: '1',
          target: '2',
          style: { stroke: '#f6ab6c', strokeWidth: 4 },
          animated: true,
        },
        {
          id: '2',
          source: '1',
          target: '3',
          style: { stroke: '#f6ab6c', strokeWidth: 4 },
          animated: true,
        },
        {
          id: '3',
          source: '1',
          target: '4',
          style: { stroke: '#f6ab6c', strokeWidth: 4 },
          animated: true,
        },
      ];

    const initialTypes = { 
        company: CompanyNode, 
        tittleNode: TitleNode
    }

    const [node_types, setNodeTypes] = useState(initialTypes);
    const [nodes, setNodes] = useState(initialNodes);
    const [edges, setEdges] = useState(initialEdges);
    const onConnect = useCallback((params: any) => setEdges((eds: Edge<any>[]) => addEdge(params, eds)), []);

    const onNodesChange = useCallback(
        (changes: NodeChange[]) => (setNodes as any)((nds: any) => applyNodeChanges(changes, nds)),
        [setNodes]
      );
      const onEdgesChange = useCallback(
        (changes: EdgeChange[]) => setEdges((eds: Edge<any>[]) => applyEdgeChanges(changes, eds)),
        [setEdges]
      );

    return <div className=" first-screen h-screen flex pb-36 justify-center" style={{'backgroundColor': 'rgb(11,25,46)'}}>
                    <ReactFlow
                        nodes={nodes}
                        edges={edges}
                        onNodesChange={onNodesChange}
                        onEdgesChange={onEdgesChange}
                        onConnect={onConnect}
                        fitView={true}
                        nodeTypes={node_types}
                        attributionPosition="top-center"
                        className=' mx-24'
                        zoomOnScroll={false}
                        >
                        <Background color="#aaa" size={1}  />
                    </ReactFlow>
        </div>

}

export default WorkExperiencePage
