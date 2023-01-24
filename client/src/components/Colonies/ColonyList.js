import ColonyCard from "./ColonyCard"
import WeatherGrid from '../Weather/WeatherGrid'
import NewColonyForm from "./NewColonyForm"
import './ColonyList.css'

const ColonyList = ({apiaryData, weather, addColony, updateColony, deleteColony, editColony}) => {

    if (!apiaryData) {
        return (
            <h3>Loading...</h3>
        )
    }

    const colonyNodes = apiaryData.colonies.map((colony,index) => {
        return <ColonyCard colony={colony} key={index} deleteColony={deleteColony} editColony={editColony}/>
    })
    
    return (
        <div>
            <ul className="colony-cards-wrapper">
                {colonyNodes}
            </ul>

            <NewColonyForm addColony={addColony}/>

            <WeatherGrid weather={weather}/>

        </div>
    )
};

export default ColonyList;