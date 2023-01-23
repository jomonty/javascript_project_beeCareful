import {  Link } from 'react-router-dom'
import BeeServices from '../../services/BeeService';


const InspectionCard = ({inspection}) => {
    return (
        <>
            <h1>Inspection Card</h1>
            <p>{inspection.inspectionDate}</p>
        </>

    )
}

export default InspectionCard;