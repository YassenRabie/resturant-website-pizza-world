import React from "react"
import { Helmet } from "react-helmet"

import Layout from "../components/layout"
import IntroVideo from "../components/IntroVideo"
import FeaturedMeals from "../components/FeaturedMeals"
import About from "../components/About"
import Customers from "../components/Customers"
import SiteIntro from "../components/SiteIntro"

const IndexPage = () => (
   <Layout>
      <Helmet>
         <meta charSet="utf-8" />
         <title>Pizza World - Home</title>
      </Helmet>
      <SiteIntro />
      <IntroVideo />
      <FeaturedMeals />
      <About />
      <Customers />
   </Layout>
)

export default IndexPage
