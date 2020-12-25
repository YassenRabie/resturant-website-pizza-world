import React from 'react'
import MealCard from './MealCard'

const MealItem = ({ meal }) => {
   return (
      <div className="meal-item" id={meal.name}>
         <MealCard meal={meal} />
         <h3 className="subtitle">Ingredients</h3>
         <p className="meal-ingredients">{meal.ingredients}</p>
         <span className="meal-price">${meal.price}</span>
      </div>
   )
}

export default MealItem
