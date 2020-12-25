import React from 'react'
import meals from '../db/Meals'
import MealItem from './MealItem'

const AllMeals = () => {
   return (
      <div className="all-meals container vert-padding">
         {meals.map((meal, index) => {
            return <MealItem meal={meal} key={index} />
         })}
      </div>
   )
}

export default AllMeals
