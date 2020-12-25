import React from 'react'

const SubPageHeader = ({ text, image }) => {
   return (
      <div className="subpage-header" style={{ backgroundImage: `url(${require(`../images/${image}`)})` }}>
         <div className="image-color-effect">
            <h1>{text}</h1>
         </div>
      </div>
   )
}

export default SubPageHeader
