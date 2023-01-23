import {  Link } from 'react-router-dom'
import BeeServices from '../services/BeeService';

const InspectionCard = ({inspection}) => {




    return (
        <li>
            Inspection Date: {inspection.inspectionDate} <br/>
            Hive Health: {inspection.hiveHealth}
        </li>
    )
}

export default InspectionCard;