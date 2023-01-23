import {useState, useEffect, Fragment} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ColonyList from '../components/Colonies/ColonyList';


import NavBar from '../components/NavBar';
import InspectionList from "../components/SingleColony/InspectionList"
import BeeServices from '../services/BeeService';
import SingleColony from '../components/SingleColony/SingleColony';

const ApiaryContainer = () => {

    const [apiaryData,setApiaryData] = useState([]);

    const [selectedApiary, setSelectedApiary] = useState(0);

	const [weather,setWeather] = useState([])

    
	useEffect(() => {
		fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/g64%204bu?unitGroup=uk&key=Q9GKPJ25W25C3H7UHVBDCKSHW&contentType=json")
			.then(res => res.json())
			.then(weatherData => {
                setWeather(weatherData.days.slice(0,5))})
            }, [])

    useEffect(() => {
        BeeServices.getApiaries()
        .then(apiaryDataRaw => {
            setApiaryData(apiaryDataRaw);
        })
    }, [])

    const addColony = (payload) => {
        
        const temp = [...apiaryData]
        temp[0].colonies.push(payload)
        console.log(payload)
        setApiaryData(temp)
        BeeServices.addColonies(temp[0]._id,payload)
    }

    const updateColony = () => {

    }
    const deleteColony = () => {

    }

	const addInspection = (payload) => {
        
        const temp = [...apiaryData]
        temp[0].colonies[0].inspections.push(payload)
        console.log(payload)
        setApiaryData(temp)
        BeeServices.deleteInspection(temp[0]._id,payload)
    }

    const updateInspection = () => {

    }

    const deleteInspection = () => {

    }


    return (
        <Router>
            {apiaryData.length > 0 && weather.length > 0 ? (
                <Fragment>
                    <NavBar /> 
                    <Routes>

                        <Route 
                            path="/" 
                            
                        />
                        <Route
                            path="/colonies"
                            element={ <ColonyList 
                                            apiaryData={apiaryData[selectedApiary]} 
                                            weather={weather}
                                            addColony={addColony}
                                            updateColony={updateColony}
                                            deleteColony={deleteColony}
                                        />
                                    }
                        />
                        <Route 
                            path="/colony" 
                            element={ <SingleColony 
                                            apiaryData={apiaryData[selectedApiary]}
                                            weather={weather}
                                            addInspection={addInspection}
                                            updateInspection={updateInspection}
                                            deleteInspection={deleteInspection}
                                        /> 
                                    } 
                        />
                        <Route path="/inspections" element={ <InspectionList addInspection={addInspection} apiaryData={apiaryData}/> } />

                    </Routes>
                </Fragment>
            ):null}
        </Router>
    )
}

export default ApiaryContainer;