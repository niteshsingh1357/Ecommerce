import { Link } from "react-router-dom";
import DetailView from "./details";
import { useState } from 'react';

const FoodList = ({ img, title, id }) => {

  const selectCard = () => {
  };

  return (
    <>
      
        <div className='col-md-3 food-card p-3'>
        <Link exact to=''>
          <div className='card shadow' key={id} onClick={selectCard}>
           <img
              src={img}
              alt={title}
              className='img-fluid custom-food-image'
            />
            <div className='card-body'>
              <h6 className='card-title text-center'>{title}</h6>
            </div>
          </div>
          </Link>
        </div>
    </>
  );
};

export default FoodList;
