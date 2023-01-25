import { Link } from 'react-router-dom'
import './InspectionCard.css'


const InspectionCard = ({ inspection, deleteInspection, selectedColony }) => {

    const handleRemoveClick = () => {
        deleteInspection(inspection, selectedColony)
    }

    return (
   

            <div className="container">
            <div className="card">
                <div className="box">
                    <div className="content">
                    <p>Inspection Date: {inspection.inspectionDate}</p>
                <p>Brood Spotted: {inspection.broodSpotted}</p>
                <p>Queen Spotted: {inspection.queenSpotted ? "Yes" : "No"}</p>
                <p>Honey Stores (kg): {inspection.honeyStores_kg}</p>
                <p>Hive health: {inspection.hiveHealth}</p>
                <button onClick={handleRemoveClick} className="btn-add-colony">Remove Inspection</button>
                <Link to={`/colonies/${inspection.parent_id}/inspections/${inspection._id}/edit`} id="edit-btn-link" >
                    <button className="btn-edit-insp">Edit</button></Link>
                    </div>
                </div>
            </div>
        </div>

            )

}

export default InspectionCard;

