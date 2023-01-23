import './WeatherGridColony.css'

const WeatherGridColony = ({weather}) => {

    function getDayOfWeek(date) {
        const dayOfWeek = new Date(date).getDay();    
        return isNaN(dayOfWeek) ? null : 
          ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dayOfWeek];}

          const newSth = getDayOfWeek(weather[0].datetime)


    const weatherColonyNodes = weather.map((weather,index) => {
        return <ul key={index}>
            <li><b>{getDayOfWeek(weather.datetime)}</b> <br/>{weather.temp >= 5 ? `Temperature OK for opening hive. Temperature: ${weather.temp}` : `Too cold to open hive. Temperature: ${weather.temp}`} <br/>
            {weather.windspeed >= 5 ? `Too windy. Windspeed: ${weather.windspeed}` :  `Calm. Windspeed: ${weather.windspeed}`  }
            </li>
        </ul>
    } )

    return (
        <>
        {weatherColonyNodes}
        </>
    )
}

export default WeatherGridColony;