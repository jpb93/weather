import React from 'react'
import WeatherContainer from './WeatherContainer'

class App extends React.Component {
    render() {
        return(
            <div className="ui fluid container">
                <WeatherContainer />
            </div>
        )
    }
}

export default App