import InspectionCard from "./InspectionCard"
import NewInspectionForm from "./NewInspectionForm";


const InspectionList = ({apiaryData, selectedColony, addInspection}) => {

    const colony = apiaryData.colonies.filter(colony => {
        return colony._id === selectedColony;
    })[0];

    console.log(colony.inspections);

    const inspectionNodes = colony.inspections.map((inspection, index) => {
        return <InspectionCard key={index} inspection={inspection} />

    })

    return (
        <>

            <ul>
                {inspectionNodes}
            </ul>
            <NewInspectionForm addInspection={addInspection} />



        </>
    )
}

export default InspectionList;
