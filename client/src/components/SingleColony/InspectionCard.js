import {  Link } from 'react-router-dom'
import './InspectionCard.css'


const InspectionCard = ({ inspection, deleteInspection, selectedColony }) => {

    const handleRemoveClick = () => {
        deleteInspection(inspection, selectedColony)
    }

    return (
        <>
        
        <li>
            <p>Inspection Date: {inspection.inspectionDate}</p>
            <p>Brood Spotted: {inspection.broodSpotted}</p>
            <p>Queen Spotted: {inspection.queenSpotted ? "Yes" : "No"}</p>
            <p>Honey Stores (kg): {inspection.honeyStores_kg}</p>
            <p>Comments: {inspection.comments}</p>

            <button onClick={handleRemoveClick}>Remove Inspection</button>
            <Link to={`/colonies/${inspection.parent_id}/inspections/${inspection._id}/edit`} >
                <button>Edit</button>
            </Link>

        </li>
        </>
    )
}

export default InspectionCard;