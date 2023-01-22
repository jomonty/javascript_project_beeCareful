import {useState, useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ColonyList from "../components/ColonyList";
import WeatherGrid from '../components/WeatherGrid';
import NavBar from '../components/NavBar';
import InspectionList from "../components/InspectionList"
import NewColonyForm from "../components/NewColonyForm"

const ApiaryContainer = () => {

    const [apiaryData,setApiaryData] = useState([]);
    

	const [weather,setWeather] = useState([])

	useEffect(() => {
		fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/g644dq?unitGroup=us&key=Q9GKPJ25W25C3H7UHVBDCKSHW&contentType=json")
			.then(res => res.json())
			.then(data => setWeather(data))
		
		}, [])
    

    const addColony = (payload) => {
        
        const temp = [...apiaryData]
        temp[0].colonies.push(payload)
        setApiaryData(temp);
    }

    return (
        <Router>
            <NavBar />
            <Routes>
				<Route path="/" element={ <ColonyList apiaryData={apiaryData} /> } />
                <Route path="/inspections" element={ <InspectionList /> } />
            </Routes>
            <NewColonyForm addColony={addColony} />
            <WeatherGrid weather={weather}/>

        </Router>
    )
}

export default ApiaryContainer;