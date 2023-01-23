import WeatherElement from "./WeatherElement";

const WeatherGrid = ({ weather }) => {


    const weatherNodes = weather.map((weather,index) => <WeatherElement key={index} weather={weather} />)
    
    return (
        <>
            {weatherNodes}
        </>
    )
}

export default WeatherGrid;