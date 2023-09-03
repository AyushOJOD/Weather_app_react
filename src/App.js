import { useState } from 'react';
import './App.css';
import axios from 'axios';
import {FaSearch} from 'react-icons/fa'


function App() {

  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=00e5f67944d22b7b9c8236ad2467a404`;

  

  const searchLocation = (event) => {
    event.preventDefault()
    axios.get(url).then((response) => {
      setData(response.data);
      console.log(response.data);
    }).catch((error) => {
      console.log(error);
    });
      
    setLocation('');
    
  }





  return (
    <div className="app">
      <form className="search" onSubmit={searchLocation}>
        <input type='text'  value={location} onChange={event => setLocation(event.target.value)} placeholder='Enter Location'/>
        <button onClick={searchLocation}>
          <FaSearch className='search-icon'/>
        </button>
      </form>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
          </div>
          <div className="description">
            {data.weather ? data.weather[0].main : null}
          </div>
        </div>
        
      {data.name != undefined && 
      <div className="bottom">
      <div className="feels">
        <p className='bold'>
          {data.main ? data.main.feels_like.toFixed() : null}°F
        </p>
        <p>Feels Like</p>
      </div>
      <div className="humidity">
        <p className="bold">
        {data.main ? data.main.humidity : null}%
        </p>
        <p>Humidity</p>
      </div>
      <div className="wind">
        <p className="bold">
          {data.clouds ? data.wind.speed : null} MPH
        </p>
        <p>Winds</p>
      </div>
    </div>}
      </div>
    </div>
  );
}

export default App;
