import './WeatherGridColony.css'
import ReactDOM from 'react-dom'
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faCheck,faXmark } from '@fortawesome/free-solid-svg-icons'
  


const WeatherGridColony = ({ weather }) => {

    function getDayOfWeek(date) {
        const dayOfWeek = new Date(date).getDay();
        return isNaN(dayOfWeek) ? null :
            ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dayOfWeek];
    }


    const weatherColonyNodes = weather.map((weather, index) => {




        const iconToUse = weather.temp >= 5 && weather.windspeed <= 5 ? <div className='ok-icon'>faCheck </div>: faXmark





        return (
            <li className={weather.temp >= 5 && weather.windspeed >= 5  ? "weather-forecast-tile-good" : "weather-forecast-tile-bad" }><b>{getDayOfWeek(weather.datetime)}</b><br/>
                <br />{weather.temp >= 5 ?
                    <div>Temperature OK for opening hive. ({weather.temp} &#8451;)</div> :
                    <div>Too cold to open hive. ({weather.temp} &#8451;)</div>}

                {weather.windspeed >= 5 ?
                    <div>Windy conditions. Take care (Wind: {weather.windspeed} mph)</div> :
                    <div>Calm. (Wind: {weather.windspeed} mph)</div>}
                    <FontAwesomeIcon icon={iconToUse} id="weather-icon" /> 
            </li>
        )
    })

    return (
        <ul className="weather-forecast-wrapper" >
            {weatherColonyNodes}
        </ul>
    )
}

export default WeatherGridColony;


