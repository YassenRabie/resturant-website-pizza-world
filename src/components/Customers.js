import React from 'react'
import customersDB from '../db/Customers'
// Import Swiper React components
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

const swiperStyle = require('swiper/swiper.scss')
const swiperStyle2 = require('swiper/components/navigation/navigation.scss')
const swiperStyle3 = require('swiper/components/pagination/pagination.scss')
const swiperStyle4 = require('swiper/components/scrollbar/scrollbar.scss')
// import 'swiper/components/navigation/navigation.scss'
// import 'swiper/components/pagination/pagination.scss'
// import 'swiper/components/scrollbar/scrollbar.scss'

SwiperCore.use([Navigation, Pagination, A11y])

const Customers = () => {
   return (
      <div className="container vert-margin">
         <h1 className="center">Our Customers</h1>
         <Swiper
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            className="customer-review-card"
            navigation={true}
            navigation
            pagination={{ clickable: true }}
         >
            {customersDB.map(element => {
               console.log(element.image)
               return <SwiperSlide className="swiper-slide">
                  <img src={require(`../images/customers/${element.image}`)} width="80" className="customer-image" />
                  <h4>{element.name}</h4>
                  <p>{element.review}</p>
               </SwiperSlide>
            })}
         </Swiper>
      </div>
   )
}

export default Customers
