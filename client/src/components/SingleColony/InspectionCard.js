import {  Link, useNavigate } from 'react-router-dom'
import BeeServices from '../../services/BeeService';
import './InspectionCard.css'


const InspectionCard = ({inspection, deleteInspection, editInspection, selectedColony}) => {

    const Navigate = useNavigate()

    const handleEditClick = () => {
        editInspection(inspection, selectedColony)
        Navigate("/inspection/edit")

    }

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
            <button onClick={handleEditClick}>Edit Inspection</button>

        </li>
        </>
    )
}

export default InspectionCard;