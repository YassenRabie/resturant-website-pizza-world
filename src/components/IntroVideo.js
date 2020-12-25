import React from 'react'
import IntroVid from "../videos/intro-vid2.mp4"
import ScrollDown from "./ScrollDown"

const IntroVideo = () => {
   return (
      <header className="intro-header">
         <ScrollDown />
         <div className="logo">
            <h1>Pizza World</h1>
         </div>
         <div className="video-filter"></div>
         <video className="video" muted autoPlay={true} loop={true}>
            <source src={IntroVid} type="video/mp4" />
         </video>
      </header>
   )
}

export default IntroVideo
