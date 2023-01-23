import { useLocation } from 'react-router-dom';
import InspectionList from './InspectionList';

const SingleColony = ({apiaryData, selectedColony}) => {

    const location = useLocation();

    const searchParam = new URLSearchParams(location.search).get('id');

    // console.log(location.search.get("id"));

    console.log(searchParam);






    
    return (
        <>
            <h1>Single Colony</h1>
            <InspectionList apiaryData={apiaryData} selectedColony={searchParam} />
        </>
    )
}

export default SingleColony;