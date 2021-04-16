
const Food = ({ img, title }) => {
  
  return (
    <>
      {/* <div class='card-columns'></div> */}
     
        <div className='col-md-3 food-card p-3'>
          <div className='card shadow'>
            <img src={img} alt='no-image-found' className='img-fluid custom-food-image' />
            <div className='card-body'>
              <h6 class='card-title text-center'>{title}</h6>
            </div>
          </div>
        </div>
    </>
  );
};

export default Food;
