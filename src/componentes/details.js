

const DetailView = (props) => {
 console.log(props);
 const {title, img} = props.location.state;

  return (
    <>
      <div className='container'>
        <div className='row mt-5'>
          <div className='card mt-5'>
            <div className='card-body p-5' >
              <h3>{title}</h3>
              <img
                src={img}
                alt={title}
                className='img-fluid custom-food-image'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailView;
