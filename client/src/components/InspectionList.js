import InspectionCard from "./InspectionCard"
import NewInspectionForm from "./NewInspectionForm";

const InspectionList = ({apiaryData, addInspection}) => {

    console.log(apiaryData[0].colonies[0].inspections);

    const inspectionNodes = apiaryData[0].colonies[0].inspections.map((inspection,index) => {
        return <InspectionCard inspection={inspection} key={index} addInspection={addInspection} />
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
