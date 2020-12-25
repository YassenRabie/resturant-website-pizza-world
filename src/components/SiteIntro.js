import React, { useEffect } from 'react'
import { FiHeart } from "react-icons/fi"
const gsap = require("gsap")

const SiteIntro = () => {
   useEffect(() => {

      window.onscroll = function () {
         window.scrollTo(0, 0)
      }

      const slider = document.querySelector('.slider')
      const background = document.querySelector('.site-intro')
      const background2 = document.querySelector('.site-background')
      const tl = new gsap.TimelineMax()

      tl.to(slider, {
         marginTop: '0rem',
         duration: 0.65,
         delay: 0.5,
         ease: gsap.Power4.easeOut
      }).to(slider, {
         marginTop: '-2rem',
         duration: 0.65,
         ease: gsap.Power4.easeOut,
      }).to(slider, {
         marginTop: '-4rem',
         duration: 0.65,
         ease: gsap.Power4.easeOut,
      }).to(slider, {
         marginTop: '-6rem',
         duration: 0.65,
         ease: gsap.Power4.easeOut,
      }).to(slider, {
         marginTop: '-8rem',
         duration: 0.65,
         ease: gsap.Power4.easeOut,
      }).to(background, {
         transformOrigin: "top",
         scaleY: 0,
         duration: 1,
         ease: gsap.Power4.easeOut,
      }, "-=0.6")
         .to(background2, {
            transformOrigin: "top",
            scaleY: 0,
            duration: 1,
            ease: gsap.Power4.easeOut,
            onComplete: enableScrolling
         }, "-=.9")
   }, [])

   const enableScrolling = () => {
      window.onscroll = function () { }
      document.querySelector('html').style.scrollBehavior = 'smooth'
   }

   return (
      <>
         <div className="site-intro">
            <div className="slider-container">
               <div className="slider">
                  <span>OPEN</span>
                  <span>SLICE</span>
                  <span>EAT</span>
                  <span><FiHeart /></span>
               </div>
            </div>
         </div>
         <div className="site-background"></div>
      </>
   )
}

export default SiteIntro
