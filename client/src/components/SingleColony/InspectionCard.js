import {  Link } from 'react-router-dom'
import './InspectionCard.css'


const InspectionCard = ({ inspection, deleteInspection, selectedColony }) => {

    const handleRemoveClick = () => {
        deleteInspection(inspection, selectedColony)
    }

    return (
        <>
        
        <li>
            <b>Inspection Date: {inspection.inspectionDate} </b><br/>
                Brood Spotted? {inspection.broodSpotted} <br/>
                Queen Spotted? {inspection.queenSpotted ? "yes" : "no"} <br/>
                Honey stores kg {inspection.honeyStores_kg} <br />
            <button onClick={handleRemoveClick}>Remove Inspection</button>
            <Link to={`/colonies/${inspection.parent_id}/inspections/${inspection._id}/edit`} >
                <button>Edit</button>
            </Link>

        </li>
        </>
    )
}

export default InspectionCard;