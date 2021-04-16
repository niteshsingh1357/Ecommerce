import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Food from "./componentes/foodlist";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from './componentes/navbar/navbar';

const App = () => {
  const APP_ID = "278b2b26";
  const APP_KEY = "bf1748fdd50f3a17e68699ef1041e84b";

  const [food, setfood] = useState([]);
  const [fruit, setfruit] = useState([]);

  useEffect(async () => {
    const response = await axios.get(
      `https://api.edamam.com/search?q=vegitable&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    setfood(response.data.hits);
    console.log(response);
  }, []);

  useEffect(async () => {
    const res = await axios.get(
      `https://api.edamam.com/search?q=fruits&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    setfruit(res.data.hits);
  }, []);
  return (
    <div>
      <Navbar/>
      <div className='container pt-5'>
        <div className='content pt-5'>
          <div className='title'>
            <h2>Vegitables</h2>
          </div>
          <div className='row'>
            {food.map((food) => (
              <Food img={food.recipe.image} title={food.recipe.label} />
            ))}
          </div>
        </div>
        <div className='content'>
          <div className='title'>
            <h2>Fruits</h2>
          </div>
          <div className='row'>
            {fruit.map((fruit) => (
              <Food img={fruit.recipe.image} title={fruit.recipe.label} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
