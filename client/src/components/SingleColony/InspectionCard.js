import {  Link, useNavigate } from 'react-router-dom'
import BeeServices from '../../services/BeeService';
import './InspectionCard.css'


const InspectionCard = ({inspection, deleteInspection}) => {

    const Navigate = useNavigate()

    const handleEditClick = () =>{
        Navigate("/inspection/edit")

    }


    return (
        <>
        
        <li>
            <b>Inspection Date: {inspection.inspectionDate} </b><br/>
            Brood Spotted? {inspection.broodSpotted} <br/>
            Queen Spotted? {inspection.queenSpotted ? "yes" : "no"} <br/>
            Honey stores kg {inspection.honeyStores_kg} <br />
            <button onClick={handleEditClick}>Edit Inspection</button>

        </li>
        </>
    )
}

export default InspectionCard;