import React, { useState } from 'react'

export const ShowWeatherInfo = ({ weatherData: { temperature, humidity, windSpeed } }) => {

  const [showCelcius, setShowCelcius] = useState(true)

  const fahrenheit = Math.round((temperature * 1.8) + 32)

  return (
    <div>
      <h1>Weather</h1>
      <p>Temprature: {showCelcius ? `${temperature}°C` : `${fahrenheit}°F`}</p>
      <p>Humidity: {humidity}%</p>
      <p>Wind Speed : {windSpeed} km/h</p>
      <button onClick={() => setShowCelcius(!showCelcius)}>{showCelcius ? "Switch to Fahrenheit" : "Switch to Celcius"}</button>
    </div>
  )
}
