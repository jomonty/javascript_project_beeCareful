import './WeatherElement.css'

const WeatherElement = ({ weather }) => {

    function getDayOfWeek(date) {
        const dayOfWeek = new Date(date).getDay();
        return isNaN(dayOfWeek) ? null :
            ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dayOfWeek];
    }


    return (
            <li className="weather-forecast-tile">
                <b>{getDayOfWeek(weather.datetime)}</b><br />
                Temperature: {weather.temp}<span>&#8451;</span><br />
                Wind Speed: {weather.windspeed} mph<br />
                <img src={`/${weather.icon}.png`} className="weather-icon" />
            </li>
    )
}

export default WeatherElement;