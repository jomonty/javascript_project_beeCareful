import SingleColony from "./SingleColony";

const WeatherElement = ({ weather }) => {

  


    return (
        <>
        <ul>
            <li>
                Date: {weather.datetime}<br/>
                Temperature: {weather.temp}<br/>
                Wind Speed: {weather.windspeed} mph<br/>
                <img src={`/${weather.icon}.png`} />
            </li>
        </ul>
        <SingleColony weather={weather} />
        </>
    )
}

export default WeatherElement;