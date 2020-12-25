import React, { useEffect } from 'react'
import meals from '../db/Meals'
import MealCard from './MealCard'
import Button from './Button'
import { BiFoodMenu } from "react-icons/bi"
import { Link } from "gatsby"

const FeaturedMeals = () => {

   return (
      <div className="container vert-padding" id="featured-meals">
         <h1>Order Food <br /><span>Anytime</span>, <span>Anywhere</span> </h1>
         <div className="featured-meals">
            {meals.map((meal, index) => {
               if (meal.featured) {
                  return <Link to={`/menu/#${meal.name}`}><MealCard meal={meal} key={index} /></Link>
               }
            })}
         </div>
         <Button link="/menu"><div className="text-container"><span className="text">Full Menu</span></div><span className="icon"><BiFoodMenu /></span></Button>

      </div>
   )
}

export default FeaturedMeals
