import ColonyCard from "./ColonyCard"
import WeatherGrid from '../components/WeatherGrid';
import NewColonyForm from "../components/NewColonyForm"

const ColonyList = ({apiaryData, addColony, weather}) => {


    

    const colonyNodes = apiaryData.colonies.map((colony,index) => {
        return <ColonyCard colony={colony} key={index}/>
    })
    


    return (
        <>
            <ul>
                {colonyNodes}
            </ul>
            <NewColonyForm addColony={addColony}/>
            <WeatherGrid weather={weather}/>
            

        </>
    )
}

export default ColonyList