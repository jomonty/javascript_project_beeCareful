

const WeatherElement = ({ weather }) => {

  


    return (
        <ul>
            <li>
                Date: {weather.datetime}<br/>
                Temperature: {weather.temp}<br/>
                Wind Speed: {weather.windspeed} mph
            </li>
        </ul>
    )
}

export default WeatherElement;