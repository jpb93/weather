import React from 'react'
import WeatherItem from './WeatherItem'

const WeatherList = ({forecasts}) => {
    const renderedList = forecasts.map((forecast) => {
        console.log(forecast)
        return <WeatherItem myForecast={forecast} />
    })

   return (
        <div className="eight wide column">{renderedList}</div>
   ) 
}

export default WeatherList