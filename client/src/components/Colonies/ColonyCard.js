import { Link } from 'react-router-dom'
import './ColonyCard.css'


const ColonyCard = ({ colony, deleteColony}) => {

    const hasInspections = colony.inspections.length > 0;
    
    let latestInspectionDate = null;

    if (hasInspections) {
        latestInspectionDate = colony.inspections
        .map(inspection => new Date(inspection.inspectionDate))
        .reduce(function (a, b) {
            return a > b ? a: b;
        });
    }

    const latestInspection = colony.inspections.filter(inspection => {
        const inspectionDate = new Date(inspection.inspectionDate);
        return inspectionDate.getTime() === latestInspectionDate.getTime();
    });

    function queenAgeMonths() {
        const currentTime = Date.now()
        const ageInMilliseconds = currentTime - Date.parse(colony.queenBirthMonth)
        return Math.floor(ageInMilliseconds / 2629746000)
    }

    const handleRemoveClick = () => {
        deleteColony(colony);
    };

    return (


        <div className='flip-card'>
            <div className='flip-card-inner'>
                <div className='flip-card-front'>
                    <h3 className='title'>{colony.name}</h3>
                </div>
                <div className='flip-card-back'>
                    <Link to={`/colonies/${colony._id}`}><button className='btn-add-colony'>See details</button></Link>
                    <div id="colony-card-txt">
                    <p>Queen Name:  {colony.queenName}</p>
                    <p>Queen's Age:  {queenAgeMonths()} months</p>
                   
                    {hasInspections ?
                        <>
                            <p>Latest Inspection Date: {latestInspection[0].inspectionDate}</p>
                            <p>Hive Health: {latestInspection[0].hiveHealth}</p>
                        </> :
                        <>
                            <p>No Inspection Data</p>
                        </>
                    } </div>
                    <div className='colony-card-buttons'>
                    <Link to={`/colonies/${colony._id}/edit`}>
                        <button className="btn-add-colony">Edit</button>
                    </Link>
                        <button onClick={handleRemoveClick} className="btn-add-colony">Remove Colony</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ColonyCard;


