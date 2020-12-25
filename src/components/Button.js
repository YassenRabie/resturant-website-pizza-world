import React from 'react'
import { Link } from "gatsby"

const Button = ({ children, link }) => {
   return (
      <Link to={link} className="btn">
         {children}
      </Link>
   )
}

export default Button
