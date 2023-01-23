import { useLocation } from 'react-router-dom';
import InspectionList from './InspectionList';
import WeatherGridColony from '../Weather/WeatherGridColony';

const SingleColony = ({apiaryData, weather, addInspection, updateInspection, deleteInspection}) => {

    const location = useLocation();
    const selectedColony = new URLSearchParams(location.search).get('id');

    const identifiedColony = apiaryData.colonies.find(element => element._id === selectedColony)
    const currentTime = Date.now()
    const ageInMilliseconds = currentTime - Date.parse(identifiedColony.queenBirthMonth)
    const ageConvertedMonths = Math.floor(ageInMilliseconds/2629746000)

    console.log(ageConvertedMonths);

    // function monthDiff(d1, currentTime) {
    //     var months;
    //     months = (d2.getFullYear() - d1.getFullYear()) * 12;
    //     months -= d1.getMonth();
    //     months += d2.getMonth();
    //     return months <= 0 ? 0 : months;
    // }
    
    return (
        <>
            <ul>
                <li>
                    Colony Name: {identifiedColony.name} <br/>
                    Queen Birth Month: {identifiedColony.queenBirthMonth} <br/>
                    Queen Age: {ageConvertedMonths} months<br/>
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