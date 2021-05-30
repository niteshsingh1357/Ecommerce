import React from "react";
import { Link } from "react-router-dom";

const FoodList = ({ img, title, id }) => {
  return (
    <>
      <div className='col-md-3 food-card p-3'>
        <Link to={{pathname: `/details/${id}`, state: {img, title}}}>
          <div className='card shadow' key={id}>
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
