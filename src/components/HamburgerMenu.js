import React, { useRef, useEffect, useState, useMemo } from 'react'
import { TimelineMax, Power4 } from "gsap"
import { Link } from "gatsby"

const HamburgerMenu = () => {
   const [menuOpen, setMenuOpen] = useState(true)

   const hamburgerIcon = useRef(null)
   const hamburgerLineOne = useRef(null)
   const hamburgerLineTwo = useRef(null)
   const hamburgerLineThree = useRef(null)
   const menuContainer = useRef(null)
   const linkContainerOne = useRef(null)
   const linkContainerTwo = useRef(null)
   const linkContainerThree = useRef(null)
   const trianglePath = useRef(null)

   var tl = new TimelineMax({ paused: true, reversed: true })

   useEffect(() => {

      // hamburger menu click animation
      tl
         .to(hamburgerLineTwo.current, {
            scaleX: 0,
            ease: Power4.easeOut,
            duration: 0.4
         })
         .to(hamburgerLineOne.current, {
            rotation: 45,
            transformOrigin: "50% 50%",
            y: 10,
            ease: Power4.easeOut,
            duration: 0.5
         }, "-=0.2")
         .to(hamburgerLineThree.current, {
            rotation: -45,
            transformOrigin: "50% 50%",
            y: -10,
            ease: Power4.easeOut,
            duration: 0.5
         }, "-=0.3")
         .to(menuContainer.current, {
            width: '100%',
            height: '100%',
            ease: Power4.easeOut,
         }, "-=1")
         .staggerTo([linkContainerOne.current, linkContainerTwo.current, linkContainerThree.current], 0.5, {
            height: 'auto',
            ease: Power4.easeOut,
            delay: -0.6
         }, 0.3)
         .from(trianglePath.current, {
            scale: 0.2,
            transformOrigin: "50% 50%",
            duration: 0.5,
            ease: Power4.easeOut,
            opacity: 0,
            rotation: 45
         }, "-=0.5")
   }, [])

   const toggleMenu = () => {
      tl.reversed() ? tl.play() : tl.reverse()
   }

   return (
      <div className="hamburger-menu">
         <svg className="hamburger-icon" ref={hamburgerIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" onClick={toggleMenu} strokeLinecap="round" >
            <line className="line-one" ref={hamburgerLineOne} x1="25" y1="40" x2="75" y2="40" strokeWidth="3" fill="none" strokeLinecap="round" />
            <line className="line-two" ref={hamburgerLineTwo} x1="25" y1="50" x2="75" y2="50" strokeWidth="3" fill="none" strokeLinecap="round" />
            <line className="line-three" ref={hamburgerLineThree} x1="25" y1="60" x2="75" y2="60" strokeWidth="3" fill="none" strokeLinecap="round" />
         </svg>

         <div className="menu-container" ref={menuContainer}>
            <div className="links">
               <div className="link-contaienr" ref={linkContainerOne}>
                  <Link className="link" to="/">HOME</Link>
               </div>
               <div className="link-contaienr" ref={linkContainerTwo}>
                  <Link className="link" to="/menu">MENU</Link>
               </div>
               <div className="link-contaienr" ref={linkContainerThree}>
                  <Link className="link" to="/about">ABOUT</Link>
               </div>
            </div>
            <svg className="triangle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
               <path className="triangle-path" ref={trianglePath} d="M 98,2 L 98,98 L 2,50  Z" fill="none" stroke="#ec0b43" strokeWidth="1" />
            </svg>
         </div>
      </div>
   )
}

export default HamburgerMenu
