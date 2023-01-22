const WeatherElement = ({ weather }) => {

  

    console.log(weather);
    return (
        <ul>
            <li>
                Date: {weather.datetime}<br/>
                Temperature: {weather.temp}<br/>
                Wind Speed: {weather.windspeed} mph<br/>
                <img src={`/${weather.icon}.png`} />
            </li>
        </ul>
    )
}

export default WeatherElement;