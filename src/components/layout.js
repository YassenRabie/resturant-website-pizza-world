import React from "react"
import PropTypes from "prop-types"
import "../styles/_base.scss"
import HamburgerMenu from "./HamburgerMenu"
import Footer from "./Footer"

const Layout = ({ children }) => {

   return (
      <>
         <HamburgerMenu />
         <main>{children}</main>
         <Footer />
      </>
   )
}

Layout.propTypes = {
   children: PropTypes.node.isRequired,
}

export default Layout
