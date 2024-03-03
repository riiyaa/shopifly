import React from 'react'

function ProductCard({prod}) {
  return (
    <div>
      <div className="p-3 bg-secondaryBg-light dark:bg-secondaryBg-dark rounded-xl" >
      <div className=" card-conatiner relative"> 
        <img
          alt={prod?.title}
          src={prod?.images[0]}
          width="250px"
          className="image"
        ></img>
        <span className='intro'>{prod?.title}</span>
      </div>
    </div>
    </div>
  )
}

export default ProductCard
