/* eslint-disable no-unused-vars */
import './App.css';
import { useState } from 'react';
import axios from 'axios';
import React from 'react';
import { WiDayWindy, WiHumidity, WiDaySunny } from 'react-icons/wi';
import { TbBrandSoundcloud } from 'react-icons/tb';
import { FaWind } from 'react-icons/fa';
import { MdLocationPin } from 'react-icons/md';





export function App() {

  const API_KEY = 'ec0fa4f693b742bc98e114856230502';
  const [weatherData, setWeatherData] = useState(null);
  const [Location, setLocation] = useState(null);
  const d = new Date();

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let weekDay = days[d.getDay()];

  const month = [];
  month[0] = "January";
  month[1] = "February";
  month[2] = "March";
  month[3] = "April";
  month[4] = "May";
  month[5] = "June";
  month[6] = "July";
  month[7] = "August";
  month[8] = "September";
  month[9] = "October";
  month[10] = "November";
  month[11] = "December";
  // const tomorrow = new Date();
  // tomorrow.setDate(new Date().getDate() +1);
  // const d = new Date(weatherData.list[0].dt * 1000);
  
 
 
 
  







  const checkWeather = async (Location) => {
    const { data } = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${Location}&days=5&aqi=no&alerts=no`)
    setWeatherData(data);
    console.log(data);
  }

  return (
    <>

      <form onSubmit={(e) => {
        e.preventDefault()
        checkWeather(Location)
      }}>
        <input
          type='text'
          placeholder='Enter Location'
          aria-label='location' onChange={(e) => {
            e.preventDefault()
            setLocation(e.target.value)
          }} ></input>
        <i class="location-icons"><MdLocationPin /></i>
      </form>
      <div>

      </div>




      {
        weatherData ?
          (
            <>

              <div div className='container-one'>

                <div className='top'>
                  <img className="weather-icon" src={weatherData.current.condition.icon} alt="" />
                  <p className='temp-one'>{weatherData.current.temp_c}°C</p>
                  <p className='country'> {weatherData.current.condition.text} </p>
                  <p>{days[d.getDay()]}, {month[d.getMonth()]} {d.getDate()}, {d.getFullYear()}</p>


                  <div className='air'>
                    <h1 className='title'><WiDayWindy /> Air Quality: </h1>
                    <div className='real' >
                      <p> <TbBrandSoundcloud />Real Feel:<span>{weatherData.current.feelslike_c}°C</span> </p>
                      <p><FaWind />Wind:<span>{weatherData.current.wind_mph}Km/h</span></p>
                    </div>
                    <div className='humidity'>
                      <p><WiHumidity/>Humidity:<span>{weatherData.current.humidity}%</span></p>
                      <p><WiDaySunny/>UV index:<span>{weatherData.current.uv}</span></p>
                    </div>
                  </div>
                </div>
                </div>
            </>
          ) : <h2>'</h2>
      }



    </>

  );
    }


export default App;



