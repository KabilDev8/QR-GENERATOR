import React from 'react';
import './App.css';

const WeatherDisplay = ({ data }) => {
  return (
    <div className="weather-info">
      <h2>{data.name}, {data.sys.country}</h2> // City and country
      <p>{data.weather[0].description}</p> // Weather description
      <p>Temperature: {data.main.temp}°C</p> // Current temperature
      <p>Humidity: {data.main.humidity}%</p> // Humidity percentage
      <p>Wind Speed: {data.wind.speed} m/s</p> // Wind speed
    </div>
  );
};

export default WeatherDisplay;
