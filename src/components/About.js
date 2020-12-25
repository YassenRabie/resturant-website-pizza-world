import React from 'react'
import Button from './Button'
import { FiChevronsRight } from "react-icons/fi"

const About = () => {
   return (
      <div className="about container vert-padding">
         <div className="about-info">
            <h1>About <span>Pizza World</span></h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi ipsa consequuntur nihil praesentium maiores ut nemo corrupti, dolores hic, velit eveniet. Excepturi mollitia temporibus placeat veritatis quasi nobis suscipit inventore.</p>
            <Button link="#"><div className="text-container"><span className="text">Contact Us</span></div><span className="icon"><FiChevronsRight /></span></Button>
         </div>
         <div className="about-image" style={{ backgroundImage: `url(${require(`../images/about.jpg`)})` }}></div>
      </div>
   )
}

export default About