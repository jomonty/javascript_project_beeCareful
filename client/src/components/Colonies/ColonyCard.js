import { Link, useNavigate } from 'react-router-dom'
import './ColonyCard.css'

const ColonyCard = ({api_id, colony, deleteColony, editColony}) => {

    const Navigate = useNavigate()

    const hasInspections = colony.inspections.length > 0;

    const latestInspectionDate = !hasInspections ? 
    null : 
    colony.inspections.map(inspection => {
        return new Date(inspection.inspectionDate);
    })
    .reduce( function (a,b) {
        return a > b ? a : b;
    });

    function queenAgeMonths() {
        const currentTime = Date.now()
        const ageInMilliseconds = currentTime - Date.parse(colony.queenBirthMonth)
        return Math.floor(ageInMilliseconds/2629746000)
    }

    const latestInspection = colony.inspections.filter(inspection => {
        const inspectionDate = new Date(inspection.inspectionDate);
        return inspectionDate.getTime() === latestInspectionDate.getTime();
    });

    const handleRemoveClick = () => {
        deleteColony(colony);
    };

    return (
        
            <div>
                <h3>Name: {colony.name}</h3>
                <p><Link to={`/colonies/${colony._id}`}>See Details</Link></p>
                <p>Queen Name: {colony.queenName}</p>
                <p>Queen Birth Month: {queenAgeMonths()}</p>
                {hasInspections ? 
                    <>
                        {/* <p>Latest Inspection Date: {latestInspection[0].inspectionDate}</p> */}
                        {/* <p>Hive Health: {latestInspection[0].hiveHealth}</p> */}
                    </> : 
                    <>
                        <p>No Inspection Data</p>
                    </>
                }
                
                <button onClick={handleRemoveClick}>Remove Colony</button>
                <Link to={`/colonies/${colony._id}/edit`}>
                    <button>Edit</button>
                </Link>
            </div>
    )
};

export default ColonyCard;