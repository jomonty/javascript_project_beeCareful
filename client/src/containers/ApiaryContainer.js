import {useState, useEffect, Fragment} from 'react'
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
		fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/g64%204bu?unitGroup=uk&key=Q9GKPJ25W25C3H7UHVBDCKSHW&contentType=json")
			.then(res => res.json())
			.then(data => {
                setWeather(data)
                fetch('http://localhost:9000/api/apiaries')
                .then(res2 => res2.json())
                .then(data2 => {
                setApiaryData(data2)
				const newData = data.days.slice(0,5)
				setWeather(newData)})
    })
			
		
            }, [])
    

    const addColony = (payload) => {
        
        const temp = [...apiaryData]
        temp[0].colonies.push(payload)
        console.log(payload)
        setApiaryData(temp)
        BeeServices.addColonies(temp[0]._id,payload)
    }

    return (
        <Router>
            {apiaryData.length > 0 && weather.length > 0 ? (
                <Fragment>
                    <NavBar /> 
                    <Routes>
                        <Route path="/" element={ <ColonyList apiaryData={apiaryData} /> } />
                        <Route path="/inspections" element={ <InspectionList /> } />
                    </Routes>
                    <NewColonyForm addColony={addColony} />
                    <WeatherGrid weather={weather}/>
                </Fragment>
            ):null}
        </Router>
    )
}

export default ApiaryContainer;