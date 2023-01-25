import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from '../components/NavBar';
import ApiaryList from '../components/Apiaries/ApiaryList';
import ColonyList from '../components/Colonies/ColonyList';
import SingleColony from '../components/SingleColony/SingleColony';
import EditColony from '../components/EditColony';
import EditInspection from '../components/EditInspection';

import BeeServices from '../services/BeeService';
import * as helpers from '../services/helpers';

import './ApiaryContainer.css'
import * as weatherFallback from '../weather_data_fallback.json';

const ApiaryContainer = () => {

    const [apiaryData,setApiaryData] = useState([]);
    const [selectedApiary, setSelectedApiary] = useState(0);
	const [weather,setWeather] = useState([])
    
	useEffect(() => {
		fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/g64%204bu?unitGroup=uk&key=5UF9XV3Y9DGQHKLMW9XSPL9R5&contentType=json")
			.then(res => {
                if (res.status === 200) {
                    return res.json();
                } else {
                    return weatherFallback;
                }
            })
			.then(weatherData => {
                setWeather(weatherData.days.slice(0,5))
            })
    }, []);

    useEffect(() => {
        BeeServices.getApiaries()
        .then(apiaryDataRaw => {
            setApiaryData(apiaryDataRaw);
        })
    }, []);

    if (!apiaryData) {
        return (
            <h3>Loading...</h3>
        )
    };

    // Functions to add colonies to db, and effect changes to state.
    const addColony = (payload) => {
        BeeServices.addColonies(apiaryData[selectedApiary]._id,payload)
        .then(res => {
            const temp = [...apiaryData];
            const updatedApiary = helpers.addColonyToState(temp[selectedApiary], res);
            temp[selectedApiary] = updatedApiary
            setApiaryData(temp);
        })
    };

    const editColony = (apiary_id, colony_id, colony) => {
        BeeServices.updateColonies(apiary_id, colony_id, colony)
        .then(res => {
            const temp = [...apiaryData];
            const updatedApiary = helpers.editColonyInState(temp[selectedApiary], res)
            temp[selectedApiary] = updatedApiary;
            setApiaryData(temp);
        })
    };
    
    const deleteColony = (colony) => {
        BeeServices.deleteColonies(apiaryData[selectedApiary]._id, colony._id)
        .then(res => {
            if (res.status === 200) {
                const temp = [...apiaryData];
                const updatedApiary = helpers.deleteColonyFromState(temp[selectedApiary], colony);
                temp[selectedApiary] = updatedApiary;
                setApiaryData(temp);
            }
        })
    };

    // Functions to add inspections to db and effect changes to state
	const addInspection = (apiary_id, colony_id, inspection) => {
        BeeServices.addInspection(apiary_id, colony_id, inspection)
        .then(res => {
                const temp = [...apiaryData];
                const updatedApiary = helpers.addInspectionToState(temp[selectedApiary], res);
                temp[selectedApiary] = updatedApiary;
                setApiaryData(temp);
            })
    };

    const editInspection = (api_id, col_id, inspection) => {
        BeeServices.updateInspection(api_id, col_id, inspection)
        .then(res => {
            const temp = [...apiaryData];
            const updatedApiary = helpers.updateInspectionInState(temp[selectedApiary], res);
            temp[selectedApiary] = updatedApiary;
            setApiaryData(temp);
        })
    };

    const deleteInspection = (inspection, selectedColony) => {
        BeeServices.deleteInspection(apiaryData[selectedApiary]._id, selectedColony, inspection._id)
        .then(res => {
            if (res.status === 200) {
                const temp = [...apiaryData];
                const updatedApiary = helpers.deleteInspectionFromState(temp[selectedApiary], inspection);
                temp[selectedApiary] = updatedApiary;
                setApiaryData(temp);
            }
        })
    };

    return (
        
        <Router>
            <NavBar 
                apiaryData={apiaryData[selectedApiary]} 
            /> 
            <Routes>
                <Route 
                    path="/" 
                    element={   <ApiaryList
                                    apiaryData={apiaryData}
                                    selectedApiary={selectedApiary}
                                    setSelectedApiary={setSelectedApiary}
                                />
                            }
                />
                <Route
                    path="/colonies"
                    element={ <ColonyList 
                                    apiaryData={apiaryData[selectedApiary]} 
                                    weather={weather}
                                    addColony={addColony}
                                    deleteColony={deleteColony}
                                    editColony={editColony}
                                />
                            }
                />
                <Route 
                    path="/colonies/:col_id" 
                    element={ <SingleColony 
                                    apiaryData={apiaryData[selectedApiary]}
                                    weather={weather}
                                    addInspection={addInspection}
                                    deleteInspection={deleteInspection}
                                    editInspection={editInspection}
                                /> 
                            } 
                />
                <Route 
                    path="/colonies/:col_id/edit" 
                    element={ <EditColony 
                                    apiaryData={apiaryData[selectedApiary]} 
                                    editColony={editColony}
                                /> 
                            } 
                />
                <Route 
                    path="/colonies/:col_id/inspections/:ins_id/edit" 
                    element={ <EditInspection 
                                    apiaryData={apiaryData[selectedApiary]} 
                                    editInspection={editInspection} 
                                />
                            } 
                />
            </Routes>
        </Router>
    )
}

export default ApiaryContainer;