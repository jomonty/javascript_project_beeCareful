import { Link } from 'react-router-dom'

const ColonyCard = ({colony, deleteColony}) => {

    const hasInspections = colony.inspections.length > 0;

    const latestInspectionDate = !hasInspections ? 
    null : 
    colony.inspections.map(inspection => {
        return new Date(inspection.inspectionDate);
    })
    .reduce( function (a,b) {
        return a > b ? a : b;
    });


    const latestInspection = colony.inspections.filter(inspection => {
        const inspectionDate = new Date(inspection.inspectionDate);
        return inspectionDate.getTime() === latestInspectionDate.getTime();
    });

    const handleClick = () => {
        deleteColony(colony);
    };


    return (
        
            <div>
                <h3>Colony Name: {colony.name}</h3>
                <p><Link to={`/colony?id=${colony._id}`}>Detail</Link></p>
                <p>Queen Name: {colony.queenName}</p>
                <p>Queen Birth Date: {colony.queenBirthMonth}</p>
                <p>Queen Age in Months: </p>
                {hasInspections ? 
                    <>
                        <p>Latest Inspection Date: {latestInspection[0].inspectionDate}</p>
                        <p>Hive Health: {latestInspection[0].hiveHealth}</p>
                    </> : 
                    <>
                        <p>No Inspection Data</p>
                    </>}
                
                <button onClick={handleClick}>Remove Colony</button>
            </div>
    )
}

export default ColonyCard