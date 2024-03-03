import React from "react";
import './catCard.scss'
import noImage from '../../Images/noimage.png'
import { useNavigate } from "react-router-dom";

function CatCard({ data }) {
  const navigate = useNavigate();

  const imageError = (e) =>{
    e.target.src = noImage
  }

  const openProducts = (data) => {
    navigate(`/products/${data.id}`)
  }

  return (
    <div className="p-3 bg-secondaryBg-light dark:bg-secondaryBg-dark rounded-xl" onClick={()=> openProducts(data)}>
      <div className=" card-conatiner relative"> 
        <img
          onError={imageError}
          alt={data.name}
          src={data.isError ? noImage  : data.image}
          width="250px"
          className="image"
        ></img>
        <span className='intro'>{data.name}</span>
      </div>
    </div>
  );
}

export default CatCard;
