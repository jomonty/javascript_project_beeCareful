import InspectionCard from "./InspectionCard"
import NewInspectionForm from "./NewInspectionForm";


const InspectionList = ({apiaryData, selectedColony, weather, addInspection, updateInspection, deleteInspection}) => {

    const colony = apiaryData.colonies.filter(colony => {
        return colony._id === selectedColony;
    })[0];

    const inspectionNodes = colony.inspections.map((inspection, index) => {
        return <InspectionCard key={index} inspection={inspection} deleteInspection={deleteInspection}/>
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
