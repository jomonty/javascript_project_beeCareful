import { Link, useNavigate } from 'react-router-dom'
import './ColonyCard.css'

const ColonyCard = ({ colony, deleteColony, editColony }) => {

    const Navigate = useNavigate()

    const hasInspections = colony.inspections.length > 0;

    const latestInspectionDate = !hasInspections ?
        null :
        colony.inspections.map(inspection => {
            return new Date(inspection.inspectionDate);
        })
            .reduce(function (a, b) {
                return a > b ? a : b;
            });

    function queenAgeMonths() {
        const currentTime = Date.now()
        const ageInMilliseconds = currentTime - Date.parse(colony.queenBirthMonth)
        return Math.floor(ageInMilliseconds / 2629746000)
    }

    const latestInspection = colony.inspections.filter(inspection => {
        const inspectionDate = new Date(inspection.inspectionDate);
        return inspectionDate.getTime() === latestInspectionDate.getTime();
    });

    const handleRemoveClick = () => {
        deleteColony(colony);
    };

    const handleEditClick = () => {
        editColony(colony);
        Navigate('/colony/edit')
    }


    return (

        <div className='flip-card'>
            <div className='flip-card-inner'>
                <div className='flip-card-front'>
                    <h3 className='title'>Name: {colony.name}</h3>
                </div>
                <div className='flip-card-back'>
                    <Link to={`/colonies/${colony._id}`}><button className='btn-add-colony'>See details</button></Link>
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
                    <div className='colony-card-buttons'>
                    <button onClick={handleRemoveClick} className="btn-add-colony">Remove Colony</button>
                    <button onClick={handleEditClick} className="btn-add-colony">Edit Colony</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ColonyCard;


