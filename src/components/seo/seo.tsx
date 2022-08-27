// //// Very simplified version of a component

import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
// import ogImage from "../../assets/images/profile3.png"

export default function SEO() {
 
  // return (
  //   <Helmet
  //     title="Tesfamichael"
  //     defaultTitle="Tesfamichael"
  //     meta={[
  //       {
  //         property: `og:description`,
  //         content: "Hi I am Tesfamichael, Software engineer based in Poland.",
  //       },
  //       {
  //         property: `og:title`,
  //         content: "Hi I am Tesfamichael, Software engineer based in Poland.",
  //       },
  //       {
  //         property: `og:url`,
  //         content: "https://tesfamichael.dev/",
  //       },
  //       {
  //         property: `og:type`,
  //         content: `website`,
  //       },
  //       {
  //         property: `og:image`,
  //         // You should ideally replace the hardcoded URL below with a value you set
  //         // in your gatsby-config.js file.  And import all shared site metadata into
  //         // this component with the useStaticQuery hook.
  //         content: `https://tesfamichael.dev/screen.png`,
  //       },
  //     ]}
  //   />
  // )

  return (
    <Helmet title={"Tesfamichael"} defaultTitle={"Tesfamichael"} titleTemplate={`%s | $Tesfamichael`}>
      <html lang="en" />

      <meta name="description" content={"Hi I am Tesfamichael, Software engineer based in Poland."} />
      <meta name="image" content="https://tesfamichael.dev/screen.png" />

      <meta property="og:title" content="Tesfamichael Molla" />
      <meta property="og:description" content="Hi I am Tesfamichael, Software engineer based in Poland." />
      <meta property="og:image" content="https://tesfamichael.dev/screen.png" />
      <meta property="og:url" content="https://tesfamichael.dev/" />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@hopemichael1074" />
      <meta name="twitter:title" content="Tesfamichael Molla" />
      <meta name="twitter:description" content="Hi I am Tesfamichael, Software engineer based in Poland." />
      <meta name="twitter:image" content="https://tesfamichael.dev/screen.png" />
    </Helmet>
  );



}