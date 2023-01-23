import WeatherElement from "./WeatherElement";
import './WeatherGrid.css'

const WeatherGrid = ({ weather }) => {


    const weatherNodes = weather.map((weather,index) => <WeatherElement key={index} weather={weather} />)
    
    return (
        <>
            {weatherNodes}
        </>
    )
}

export default WeatherGrid;