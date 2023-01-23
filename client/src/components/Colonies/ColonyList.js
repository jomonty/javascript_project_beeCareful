import ColonyCard from "./ColonyCard"
import WeatherGrid from '../Weather/WeatherGrid'
import NewColonyForm from "./NewColonyForm"

const ColonyList = ({apiaryData, weather, addColony, updateColony, deleteColony}) => {

    console.log(apiaryData);
    const colonyNodes = apiaryData.colonies.map((colony,index) => {
        return <ColonyCard colony={colony} key={index} deleteColony={deleteColony}/>
    })
    
    return (
        <div>
            <ul>
                {colonyNodes}
            </ul>

            <NewColonyForm addColony={addColony}/>

            <WeatherGrid weather={weather}/>

        </div>
    )
};

export default ColonyList;