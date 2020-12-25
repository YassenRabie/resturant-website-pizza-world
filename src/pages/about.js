import React from 'react'
import { Helmet } from "react-helmet"
import Layout from '../components/layout'
import BackToHome from '../components/BackToHome'
import SubPageHeader from '../components/SubPageHeader'
import OurGoal from '../components/OurGoal'
import AboutSlideShow from '../components/AboutSlideShow'
import SubSiteIntro from '../components/SubSiteIntro'

const about = () => {
   return (
      <Layout>
         <Helmet>
            <meta charSet="utf-8" />
            <title>Pizza World - About</title>
         </Helmet>
         <SubSiteIntro />
         <BackToHome />
         <SubPageHeader text="About us" image="about-us-image.jpg" />
         <OurGoal />
         <AboutSlideShow />
      </Layout>
   )
}

export default about
