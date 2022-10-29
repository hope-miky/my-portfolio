


import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';
// import Img from 'gatsby-plugin-image'
import React, { useEffect, useState } from 'react'
import './design.css'

function DesignView(props: any) {

    const onScroll = (e: any) => console.log(e.target.scrollLeft);

    const data = useStaticQuery(graphql`
    query {
        allFile(filter: {relativeDirectory: {eq: "works"}}) {
            edges {
              node {
                id
                base
                childImageSharp {
                  gatsbyImageData(width: 330, height: 330, layout: FIXED,  transformOptions: {cropFocus: CENTER})
                }
              }
            }
          }
    }
        `)

    // console.log(data);

  return (
    <div className="h-screen">
      <div onScroll={onScroll} className='noscroll mb-24 w-screen flex flex-wrap justify-center'>
        {
            data.allFile.edges.map((image: any) => {
              if(image.node.childImageSharp !== null) {
                const img = getImage(image.node)
                console.log(image);
                return <div key={image.node.id} className=" hover:z-50 hover:scale-105 hover:mx-2 ">
                            <div className="relative z-0">
                              <GatsbyImage  className='' image={img!} alt={image.node.id} />

                              <div className="absolute group bg-green-200/30 hover:bg-white/30 inset-0 text-white/0 flex flex-col justify-end  z-10">

                                  <div className=" group-hover:bg-green-600/70 pt-3hover:flex flex-col px-5">
                                      <p className="text-md text-center group-hover:text-teal-900 font-bold">This should be on top of the map</p>
                                      <p className="font-mono group-hover:text-gray-800 text-center text-xs">This is some description about the img</p>
                                      <p className=" font-bold hover:cursor-pointer group-hover:text-black hover:text-teal-900 my-2 text-center text-sm">view</p>
                                  </div>

                              </div>

                            </div>
                    </div>
              } else {
                return <></>
              }
                
            })
        }   


    </div>
    </div>

  )
}

export default DesignView
