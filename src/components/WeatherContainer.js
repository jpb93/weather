import React from 'react'
import WeatherItem from './WeatherItem'

import OpenWeather from '../apis/OpenWeather'
import WeatherList from './WeatherList'

const KEY = `2694e043c994f6e659aee2fbac061221`
const CityID = `4942939`

class WeatherContainer extends React.Component {

    state = {
        weatherReports: []
    }

    componentDidMount() {
        this.getWeather()
    }
    
    getWeather = async () => {
        const response = await OpenWeather
            .get(`http://api.openweathermap.org/data/2.5/forecast?id=${CityID}&APPID=${KEY}`)
        
        
        this.setState({weatherReports: response.data.list})
    }

    render() {
        return (
            <div className="ui text container">
                <h2>7-Day Forecast</h2>
                <div>
                    <div className="ui grid">
                        <WeatherList forecasts={this.state.weatherReports.slice(0, 7)} />
                    </div>
                </div>
            </div>
        )
    }
}

export default WeatherContainer

// weather={this.state.weatherReports[0].weather[0].description}
// this.state.weatherReports[0].weather[0].main -> "clouds"