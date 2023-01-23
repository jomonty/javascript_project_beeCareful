import { Link } from 'react-router-dom'
import SingleColony from "../SingleColony/SingleColony"
import BeeServices from '../../services/BeeService'


const ColonyCard = ({colony, deleteColony}) => {

    const inspections = colony.inspections;

    const latestInspectionDate = colony.inspections.map(inspection => {
        return new Date(inspection.inspectionDate);
    })
    .reduce( function (a,b) {
        return a > b ? a : b;
    })


    const latestInspection = colony.inspections.filter(inspection => {
        const inspectionDate = new Date(inspection.inspectionDate);
        return inspectionDate.getTime() === latestInspectionDate.getTime();
    })

    console.log(latestInspection)
    console.log(latestInspection.inspectionDate)

    const handleClick = () => {
        deleteColony(colony._id)
    }

    return (
        
            <li>
                
                <h3>Colony Name: {colony.name}</h3>
                <p><Link to={`/colony?id=${colony._id}`}>Detail</Link></p>
                {/* <Link to={`/colony?id=${colony._id}`}>Colony Name: {colony.name} </Link> */}
                <p>Queen Name: {colony.queenName}</p>
                <p>Queen Birth Month: {colony.queenBirthMonth}</p>
                <p>Latest Inspection Date: {latestInspection[0].inspectionDate}</p>
                <button onClick={handleClick}>Remove Colony</button>
            </li>
        
    )
}

export default ColonyCard