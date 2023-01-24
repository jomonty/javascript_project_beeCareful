import './WeatherElement.css'

const WeatherElement = ({ weather }) => {

    function getDayOfWeek(date) {
        const dayOfWeek = new Date(date).getDay();
        return isNaN(dayOfWeek) ? null :
            ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dayOfWeek];
    }


    return (
            <li className="weather-forecast-tile">
                <h3><b>{getDayOfWeek(weather.datetime)}</b></h3>
                <p>Temperature: {weather.temp}<span>&#8451;</span></p>
                <p>Wind Speed: {weather.windspeed} mph</p>
                <img src={`/${weather.icon}.png`} id="weather-icon" />
            </li>
    )
}

export default WeatherElement;