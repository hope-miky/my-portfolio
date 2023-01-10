import { animated, useSpring, useSprings } from "@react-spring/web";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import React, { useEffect, useMemo, useState } from "react";

const CircularImagesComponent = (props: any) => {
  const [angel, setAngel] = useState(40);
  const [position, setPosition] = useState([400, 0]);
  let x = 200; // center
  let y = 0; // center
  let r = window.innerWidth > 640 ? 250 : 100; // radius

  console.log(window.innerWidth);

  const [images, _] = useState(["../../assets/images/django-logo.png"]);

  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "frameworks" } }) {
        edges {
          node {
            id
            base
            childImageSharp {
              gatsbyImageData(
                width: 60
                height: 60
                layout: FIXED
                transformOptions: { cropFocus: CENTER }
              )
            }
          }
        }
      }
    }
  `);

  const [springs, api] = useSprings(data.allFile.edges.length, (i) => ({
    from: {
      x: i,
      y: 0,
    },
    config: {
      duration: 10,
    },
  }));

  const xPositionFromAngle = (a: number) => {
    const new_angle = (a + Math.PI / 360) % (Math.PI * 2);
    let px = x + r * Math.cos(new_angle);
    return px;
  };

  const yPositionFromAngle = (a: number) => {
    const new_angle = (a + Math.PI / 360) % (Math.PI * 2);
    let py = y + r * Math.sin(new_angle);
    return py;
  };

  const rotateIt = () => {
    const new_angle = (angel + Math.PI / 360) % (Math.PI * 2);

    api.start((index) => ({
      to: {
        x: xPositionFromAngle(new_angle + index * 4),
        y: yPositionFromAngle(new_angle + index * 4),
      },
    }));

    setAngel(new_angle);
  };

  useEffect(() => {
    setTimeout(() => {
      rotateIt();
    }, 10);
  }, [angel]);

  return (
    <div className="">
      {springs.map((spring: any, idx) => {
        if (data.allFile.edges[idx].node.childImageSharp !== null) {
          const img = getImage(data.allFile.edges[idx].node);

          return (
            <animated.div
              key={data.allFile.edges[idx].node.id}
              style={{ ...spring, padding: 20, position: "absolute" }}
            >
              <GatsbyImage
                className="rounded-full border-2 border-l-2 border-teal-400 bg-white p-2"
                image={img!}
                alt={data.allFile.edges[idx].node.id}
              />
            </animated.div>
          );
        } else {
          return <></>;
        }
      })}
    </div>
  );
};

export default CircularImagesComponent;
