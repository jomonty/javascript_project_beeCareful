import { useLocation } from 'react-router-dom';
import InspectionList from './InspectionList';
import WeatherGridColony from '../Weather/WeatherGridColony';
import './SingleColony.css'

const SingleColony = ({apiaryData, weather, addInspection, updateInspection, deleteInspection}) => {

    const location = useLocation();
    const selectedColony = new URLSearchParams(location.search).get('id');

    const identifiedColony = apiaryData.colonies.find(element => element._id === selectedColony)

    
    
    return (
        <>
            <ul>
                <li>
                    Colony Name: {identifiedColony.name} <br/>
                    Queen Birth Month: {identifiedColony.queenBirthMonth} <br/>
                    Queen Name: {identifiedColony.queenName} <br/>
                </li>
            </ul>
            <h3>Inspections:</h3>
            <InspectionList 
                apiaryData={apiaryData} 
                selectedColony={selectedColony} 
                addInspection={addInspection}
                updateInspection={updateInspection}
                deleteInspection={deleteInspection}
            />
            <h3>Weather Forecast</h3>
            <WeatherGridColony weather={weather} />
        </>
    )
}

export default SingleColony;