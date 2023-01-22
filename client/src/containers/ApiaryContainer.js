import {useState, useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ColonyList from "../components/ColonyList";
import WeatherGrid from '../components/WeatherGrid';
import NavBar from '../components/NavBar';
import InspectionList from "../components/InspectionList"
import NewColonyForm from "../components/NewColonyForm"
import BeeServices from '../services/BeeService';

const ApiaryContainer = () => {

    const [apiaryData,setApiaryData] = useState([]);

	const [weather,setWeather] = useState([])

	useEffect(() => {
		fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/g644dq?unitGroup=us&key=Q9GKPJ25W25C3H7UHVBDCKSHW&contentType=json")
			.then(res => res.json())
			.then(data => {
                setWeather(data)
                fetch('http://localhost:9000/api/apiaries')
                .then(res2 => res2.json())
                .then(data2 => setApiaryData(data2))})
            }
		
		, [])
    

    const addColony = (payload) => {
        
        const temp = [...apiaryData]
        temp[0].colonies.push(payload)
        console.log(payload)
        setApiaryData(temp)
        BeeServices.addColonies(temp[0]._id,payload)
    }

    return (
        <Router>
            <NavBar />
            <Routes>
				{apiaryData.length > 0 && <Route path="/" element={ <ColonyList apiaryData={apiaryData} /> } />}
                {apiaryData.length > 0 && <Route path="/inspections" element={ <InspectionList /> } />}
            </Routes>
            {apiaryData.length > 0 && <NewColonyForm addColony={addColony} />}
            {apiaryData.length > 0 && <WeatherGrid weather={weather}/>}

        </Router>
    )
}

export default ApiaryContainer;