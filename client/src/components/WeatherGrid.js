import WeatherElement from "./WeatherElement";

const WeatherGrid = ({ weather }) => {


    const weatherNodes = weather.map((weather,index) => {
        return <WeatherElement key={index} weather={weather} />
    })
    
    return (
        <>
            {weatherNodes}
        </>
    )
}

export default WeatherGrid;