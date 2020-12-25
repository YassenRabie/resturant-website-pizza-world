import React from 'react'
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi"

const Footer = () => {
   return (
      <footer className="footer">
         <div className="logo">
            <span>Pizza World</span>
         </div>
         <div className="copyright">
            <span>© 2020 Yassen Rabie</span>
         </div>
         <div className="social-links">
            <FiFacebook className="icon" />
            <FiInstagram className="icon" />
            <FiTwitter className="icon" />
         </div>
      </footer>
   )
}

export default Footer
