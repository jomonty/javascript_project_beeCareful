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

        const iconToUse = weather.temp >= 5 ? faCheck : faXmark


        return (
            <li key={index} className={weather.temp >= 5 && weather.windspeed >= 5  ? "weather-forecast-tile-good" : "weather-forecast-tile-bad" }><b>{getDayOfWeek(weather.datetime)}</b><br/>
                <br />{weather.temp >= 5 ?
                    <div>Temperature OK for opening hive. ({weather.temp} &#8451;)</div> :
                    <div>Too cold to open hive. ({weather.temp} &#8451;)</div>}
                    
                {weather.windspeed >= 5 ?
                    <div className='weather-grid-text'>Windy conditions. Take care (Wind: {weather.windspeed} mph)</div> :
                    <div className='weather-grid-text'>Calm. (Wind: {weather.windspeed} mph)</div>}
                  
                <div className="fa-container">
                {weather.temp >= 5 ?   <FontAwesomeIcon icon={faCheck} size="4x"/> : <FontAwesomeIcon icon={faXmark} size="4x" /> }
                </div>
            </li>
        )
    })

    return (
        <ul className="weather-colony-forecast-wrapper" >
            {weatherColonyNodes}
        </ul>
    )
}

export default WeatherGridColony;


