import React from 'react'
import { Helmet } from "react-helmet"
import AllMeals from '../components/AllMeals'
import BackToHome from '../components/BackToHome'
import Layout from '../components/layout'
import SubPageHeader from '../components/SubPageHeader'
import SubSiteIntro from '../components/SubSiteIntro'

const menu = () => {
   return (
      <Layout>
         <Helmet>
            <meta charSet="utf-8" />
            <title>Pizza World - Food Menu</title>
         </Helmet>
         <SubSiteIntro />
         <BackToHome />
         <SubPageHeader text="Food Menu" image="menu-image.jpg" />
         <AllMeals />
      </Layout>
   )
}

export default menu
