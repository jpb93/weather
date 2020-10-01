import React from 'react'

class WeatherContainer extends React.Component {
    render() {
        return (
            <div className="ui text container">
                Hello
                <div className="ui grid">
                    <div className="five column row">
                        <div className="column">
                            Rain!
                        </div>
                        <div className="column">
                            Sun!
                        </div>
                        <div className="column">
                            Clouds!
                        </div>
                        <div className="column">
                            Meteor!
                        </div>
                        <div className="column">
                            Fog!
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default WeatherContainer