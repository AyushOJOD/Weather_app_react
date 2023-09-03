import { useState } from 'react';
import './App.css';
import axios from 'axios';
import {FaSearch} from 'react-icons/fa'


function App() {

  
  const url = 'https://api.openweathermap.org/data/2.5/weather?q={location}&appid=00e5f67944d22b7b9c8236ad2467a404';

  const [data, setData] = useState({});
  const [location, setLocation] = useState('');
 


  const searchLocation = (event) => {
    if(event.key === 'Enter'){
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation('');
    }
  }





  return (
    <div className="app">
      <div className="search">
        <input type="text" value={location} onChange={event => setLocation(event.target.value)} placeholder='Enter Location'/>
        <button onClick={searchLocation}>
          <FaSearch className='search-icon'/>
        </button>
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>Ranchi</p>
          </div>
          <div className="temp">
            <h1>50°F</h1>
          </div>
          <div className="description">
            Clouds
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p className='bold'>65°F</p>
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            <p className="bold">20%</p>
            <p>Humidity</p>
          </div>
          <div className="wind">
            <p className="bold">3MPH</p>
            <p>Winds</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
