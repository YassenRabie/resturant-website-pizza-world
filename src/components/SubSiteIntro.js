import React, { useEffect } from 'react'
const gsap = require("gsap")

const SubSiteIntro = () => {
   useEffect(() => {

      window.onscroll = function () {
         window.scrollTo(0, 0)
      }

      const background = document.querySelector('.site-intro')
      const background2 = document.querySelector('.site-background')
      const tl = new gsap.TimelineMax()

      tl
         .to(background, {
            transformOrigin: "top",
            scaleY: 0,
            duration: 1,
            ease: gsap.Power4.easeOut,
            delay: .5
         })
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
         </div>
         <div className="site-background"></div>
      </>
   )
}

export default SubSiteIntro
