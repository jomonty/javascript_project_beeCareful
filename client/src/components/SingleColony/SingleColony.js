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
    
    return (<>
        <div className='single-colony-wrapper'>
           <div className="container-insp">
            <div className="card-insp">
                <div className="box-insp">
                    <div className="content-insp">
                    <p>Colony Name: {identifiedColony.name} </p>
                    <p>Queen Birth Month: {identifiedColony.queenBirthMonth} </p>
                    <p>Queen Name: {identifiedColony.queenName} </p>
                    </div>
                </div>
            </div>
        </div>
            <Collapsible trigger="&#128270; View Inspections &#128269;" className='btn-add-colony'>
                <h3 id="colony-inspection-title">Inspections:</h3>
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
            </>
    )
}

export default SingleColony;



