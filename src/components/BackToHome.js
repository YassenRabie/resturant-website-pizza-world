import React from 'react'
import { Link } from "gatsby"

const BackToHome = () => {
   return (
      <div className="back-to-home">
         <Link to="/" className="icon">
            <svg className="back-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
               {/* <line className="line-one" x1="35" y1="50" x2="60" y2="30" strokeWidth="3" fill="none" strokeLinecap="round" />
               <line className="line-three" x1="35" y1="50" x2="60" y2="70" strokeWidth="3" fill="none" strokeLinecap="round" /> */}
               <path d="M 60,30 L 35,50 L 60,70" fill="none" stroke="#ec0b43" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
         </Link>
      </div>
   )
}

export default BackToHome
