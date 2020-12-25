import React from 'react'

const MealCard = ({ meal }) => {
   return (
      <div className="meal-card">
         <div className="image-container" style={{ backgroundImage: `url(${require(`../images/${meal.image}`)})` }}>
         </div>
         <div className="meal-name">
            <span>{meal.name}</span>
         </div>
      </div>
   )
}

export default MealCard