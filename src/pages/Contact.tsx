import * as React from "react"
// import { Link } from "gatsby"
import ContactsPageView from "../components/contacts/contacts";
import Seo from "../components/seo/SeoComponent";
import { Helmet } from "react-helmet";
// markup
const ContactPage = (props: any) => {
  return (
    <div>
    <Helmet>
      <html lang="en" />
      <meta charSet="utf-8" />
      <title>Contact Info</title>
    </Helmet>
    <div>
    Contact Info
    </div>
    </div>
  )
}

export default ContactPage
