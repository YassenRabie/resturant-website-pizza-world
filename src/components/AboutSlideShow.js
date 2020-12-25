import React from 'react'

import SwiperCore, { Navigation, Scrollbar, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/scrollbar/scrollbar.scss'
// install Swiper components
SwiperCore.use([Navigation, Scrollbar, Autoplay])

const AboutSlideShow = () => {
   return (
      <Swiper
         className="slide-show vert-margin"
         spaceBetween={30}
         slidesPerView={1}
         scrollbar={Scrollbar}
         loop={true}
         autoplay={Autoplay}
      >
         <SwiperSlide><div className="slide-image" style={{ backgroundImage: `url(${require(`../images/slide-show/1.jpg`)})` }}></div></SwiperSlide>
         <SwiperSlide><div className="slide-image" style={{ backgroundImage: `url(${require(`../images/slide-show/2.jpg`)})` }}></div></SwiperSlide>
         <SwiperSlide><div className="slide-image" style={{ backgroundImage: `url(${require(`../images/slide-show/3.jpg`)})` }}></div></SwiperSlide>
         <SwiperSlide><div className="slide-image" style={{ backgroundImage: `url(${require(`../images/slide-show/4.jpg`)})` }}></div></SwiperSlide>
         <SwiperSlide><div className="slide-image" style={{ backgroundImage: `url(${require(`../images/slide-show/5.jpg`)})` }}></div></SwiperSlide>
         <SwiperSlide><div className="slide-image" style={{ backgroundImage: `url(${require(`../images/slide-show/6.jpg`)})` }}></div></SwiperSlide>
      </Swiper>
   )
}

export default AboutSlideShow
