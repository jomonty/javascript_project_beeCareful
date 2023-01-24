import {useState, useEffect, Fragment} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ColonyList from '../components/Colonies/ColonyList';
import EditColony from '../components/EditColony';
import EditInspection from '../components/EditInspection';


import NavBar from '../components/NavBar';
import InspectionList from "../components/SingleColony/InspectionList"
import BeeServices from '../services/BeeService';
import SingleColony from '../components/SingleColony/SingleColony';

import './ApiaryContainer.css'

const ApiaryContainer = () => {

    const [apiaryData,setApiaryData] = useState([]);

    const [selectedApiary, setSelectedApiary] = useState(0);

	const [weather,setWeather] = useState([])

    const [colonyData,setColonyData] = useState()

    const [inspection, setInspection] = useState()

    
	useEffect(() => {
		fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/g64%204bu?unitGroup=uk&key=Q86C2HV4D2FX4MKNCXF235DBE&contentType=json")
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
        BeeServices.addColonies(apiaryData[selectedApiary]._id,payload)
        .then(res => {
            const temp = [...apiaryData];
            temp[selectedApiary].colonies.push(res);
            setApiaryData(temp);
        })
    }

    const editColony = (colony) =>{
        setColonyData(colony)

    }

    const updateColony = (payload) => {
        const elementToChange = ['name', 'queenName', "queenBirthMonth"]
        const object = {}
        elementToChange.forEach(element => {
            object[element] = payload[element]
        })
        console.log(object)
        const newColony = Object.assign(colonyData, object)
        BeeServices.updateColonies(apiaryData[selectedApiary]._id, colonyData._id, newColony)
        
        
    }
    
    const deleteColony = (colony) => {
        BeeServices.deleteColonies(apiaryData[selectedApiary]._id, colony._id)
        .then(res => {
            if (res.status === 200) {
                const temp = [...apiaryData];
                const index = temp[selectedApiary].colonies.indexOf(colony);
                temp[selectedApiary].colonies.splice(index, 1);
                setApiaryData(temp);
            }
        })
    }

	const addInspection = (apiary_id, colony_id, inspection) => {
        BeeServices.addInspection(apiary_id, colony_id, inspection)
        .then(res => {
            console.log(res);
                const temp = [...apiaryData];
                const colony = temp[selectedApiary].colonies.filter(colony => {
                    console.log(colony._id);
                    console.log(colony_id);
                    return colony._id === colony_id;
                })[0]
                console.log(colony);
                const col_index = temp[selectedApiary].colonies.indexOf(colony);
                console.log(col_index);
                console.log(res);
                temp[selectedApiary].colonies[col_index].inspections.push(res);
                console.log(temp[selectedApiary].colonies[col_index]);
                console.log(res);
                setApiaryData(temp);
            })
        
        // const temp = [...apiaryData]
        // temp[0].colonies[0].inspections.push(payload)
        // console.log(payload)
        // setApiaryData(temp)
        // BeeServices.deleteInspection(temp[0]._id,payload)
    }

    const editInspection = (Inspection, selectedColony) => {
        setInspection(Inspection)
        setColonyData(selectedColony)
        console.log(selectedColony)
    }

    const updateInspection = (payload, colonyData) => {
        const elementToChange = ['inspectionDate', 'queenSpotted', "broodSpotted", "honeyStores_kg", "hiveHealth", "comments"]
        const object = {}
        elementToChange.forEach(element => {
            object[element] = payload[element]
        })
        const newInspection = Object.assign(inspection, object)
        console.log('123')
        console.log(colonyData)
        console.log(inspection._id)
        console.log('123')
        BeeServices.updateInspection(apiaryData[selectedApiary]._id, colonyData, newInspection)
        
        
    }

    const deleteInspection = (inspection, selectedColony) => {
        BeeServices.deleteInspection(apiaryData[selectedApiary]._id, selectedColony, inspection._id)
        .then(res => {
            if (res.status === 200) {
                const temp = [...apiaryData];
                const colony = temp[selectedApiary].colonies.find(element => element._id === selectedColony);
                const colonyIndex = temp[selectedApiary].colonies.indexOf(colony)
                const inspectionIndex =  temp[selectedApiary].colonies[colonyIndex]['inspections'].indexOf(inspection)
                temp[selectedApiary].colonies[colonyIndex]['inspections'].splice(inspectionIndex, 1);
                setApiaryData(temp);
            }
        })
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
                                            editColony={editColony}
                                        />
                                    }
                        />
                        <Route 
                            path="/colony" 
                            element={ <SingleColony 
                                            apiaryData={apiaryData[selectedApiary]}
                                            weather={weather}
                                            addInspection={addInspection}
                                            deleteInspection={deleteInspection}
                                            editInspection={editInspection}
                                        /> 
                                    } 
                        />
                        <Route path="/inspections" element={ <InspectionList addInspection={addInspection} apiaryData={apiaryData} editInspection={editInspection} deleteInspection={deleteInspection}/> } />
                        <Route path="/colony/edit" element={ <EditColony colonyData={colonyData} updateColony={updateColony}/> } />
                        <Route path="/inspection/edit" element={ <EditInspection inspection={inspection} updateInspection={updateInspection} selectedColony={colonyData}/>} />
                    </Routes>
                </Fragment>
            ):null}
        </Router>
    )
}

export default ApiaryContainer;