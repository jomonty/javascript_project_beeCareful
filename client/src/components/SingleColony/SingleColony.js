import { useParams } from 'react-router-dom';
import InspectionList from './InspectionList';
import WeatherGridColony from '../Weather/WeatherGridColony';
import './SingleColony.css'
import Collapsble from 'react-collapsible'

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
            <ul>
                <li>
                    Colony Name: {identifiedColony.name} <br/>
                    Queen Birth Month: {identifiedColony.queenBirthMonth} <br/>
                    Queen Name: {identifiedColony.queenName} <br/>
                </li>
            </ul>
            <Collapsble trigger="&#128270; View Inspections &#128269;" className='collapsible'>
            <h3>Inspections:</h3>
            <InspectionList 
                apiaryData={apiaryData} 
                selectedColony={col_id} 
                addInspection={addInspection}
                updateInspection={updateInspection}
                deleteInspection={deleteInspection}
                editInspection={editInspection}
            />
            </Collapsble>
            <h3>Weather Forecast</h3>
            <WeatherGridColony weather={weather} />
        </div>
    )
}

export default SingleColony;