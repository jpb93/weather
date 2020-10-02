import React from 'react'

const WeatherItem = props => {
    if (!props.myForecast){
        return <div>Loading...</div>
    }

    const high = convertToF(props.myForecast.main.temp_max)
    const low = convertToF(props.myForecast.main.temp_min)
    
    return (
        <div className="column">
            <h3>Forecast: {props.myForecast.weather[0].main}</h3>
            <p>High: {high}</p>
            <p>Low: {low}</p>
        </div>
    )

}

const convertToF = temperature => {
    return Math.round((temperature - 273.15) * (9/5) + 32)
}

export default WeatherItem


