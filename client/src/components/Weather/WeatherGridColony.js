import './WeatherGridColony.css'

const WeatherGridColony = ({ weather }) => {

    function getDayOfWeek(date) {
        const dayOfWeek = new Date(date).getDay();
        return isNaN(dayOfWeek) ? null :
            ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dayOfWeek];
    }




    const weatherColonyNodes = weather.map((weather, index) => {
        return <ul key={index}>
            <li><b>{getDayOfWeek(weather.datetime)}</b>
                <br />{weather.temp >= 5 ?
                    <div>Temperature OK for opening hive. ({weather.temp} &#8451;)</div> :
                    <div>Too cold to open hive. ({weather.temp} &#8451;)</div>}

                {weather.windspeed >= 5 ?
                    <div>Too windy. (Wind: {weather.windspeed} mph)</div> :
                    <div>Calm. (Wind: {weather.windspeed} mph)</div>}
                
                <img src={`/${weather.icon}.png`} className="weather-icon" />

            </li>
        </ul>
    })

    return (
        <>
            {weatherColonyNodes}
        </>
    )
}

export default WeatherGridColony;


