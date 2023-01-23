import { useLocation } from 'react-router-dom';
import InspectionList from './InspectionList';
import WeatherGrid from '../Weather/WeatherGrid';

const SingleColony = ({apiaryData, weather, addInspection, updateInspection, deleteInspection}) => {

    const location = useLocation();
    const selectedColony = new URLSearchParams(location.search).get('id');

    console.log(selectedColony);
 
    return (
        <>
            <h1>Single Colony</h1>
            <InspectionList 
                apiaryData={apiaryData} 
                selectedColony={selectedColony} 
                addInspection={addInspection}
                updateInspection={updateInspection}
                deleteInspection={deleteInspection}
            />
            <WeatherGrid weather={weather} />
        </>
    )
}

export default SingleColony;