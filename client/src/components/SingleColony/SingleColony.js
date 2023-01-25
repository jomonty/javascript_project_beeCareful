import { useParams } from 'react-router-dom';
import InspectionList from './InspectionList';
import WeatherGridColony from '../Weather/WeatherGridColony';
import './SingleColony.css'
import Collapsible from 'react-collapsible'

const SingleColony = ({apiaryData, weather, addInspection, updateInspection, deleteInspection, editInspection}) => {

    const { col_id } = useParams();
    
    if (!apiaryData) {
        return (
            <h3>Loading...</h3>
        )
    }
    
    const identifiedColony = apiaryData.colonies.find(element => {
        return element._id === col_id;
    });
    
    return (
        <div>
            <div className='colony-inspections-wrapper'>
            <ul className='single-colony-card'>
                <li>
                    Colony Name: {identifiedColony.name} <br/>
                    Queen Birth Month: {identifiedColony.queenBirthMonth} <br/>
                    Queen Name: {identifiedColony.queenName} <br/>
                </li>
            </ul>
            <Collapsible trigger="&#128270; View Inspections &#128269;" className="btn-add-colony">
                <h3>Inspections:</h3>
                <InspectionList 
                    apiaryData={apiaryData} 
                    selectedColony={col_id} 
                    addInspection={addInspection}
                    updateInspection={updateInspection}
                    deleteInspection={deleteInspection}
                    editInspection={editInspection}
                />
            </Collapsible>
            </div>
            <h3 id="colony-weather-title">Inspection Weather Assesment:</h3>
            <WeatherGridColony weather={weather} />
        </div>
    )
}

export default SingleColony;