import {  Link } from 'react-router-dom'
import BeeServices from '../../services/BeeService';
import './InspectionCard.css'


const InspectionCard = ({inspection, deleteInspection}) => {

    return (
        <>
        
        <li>
            <b>Inspection Date: {inspection.inspectionDate} </b><br/>
            Brood Spotted? {inspection.broodspotted} <br/>
            Queen Spotted? {inspection.queenSpotted ? "yes" : "no"} <br/>
            Honey stores kg {inspection.honeyStores_kg} <br />

        </li>
        </>
    )
}

export default InspectionCard;