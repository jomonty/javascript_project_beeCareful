import {useState, useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ColonyList from "../components/ColonyList";
import WeatherGrid from '../components/WeatherGrid';
import NavBar from '../components/NavBar';
import InspectionList from "../components/InspectionList"
import NewColonyForm from "../components/NewColonyForm"

const ApiaryContainer = () => {

    const [apiaryData,setApiaryData] = useState([{
		"_id": "63cbd3510222e05f54ff1258",
		"name": "Andrew's Apiary",
		"address": "123 Andrew's House",
		"colonies": [
			{
				"_id": "63cbd3510222e05f54ff125c",
				"parent_id": "63cbd3510222e05f54ff1258",
				"name": "Colony 1",
				"queenName": "Brenda",
				"queenBirthMonth": "2022-01-01",
				"inspections": [
					{
						"_id": "63cbd3510222e05f54ff125e",
						"parent_id": "63cbd3510222e05f54ff125c",
						"inspectionDate": "2021-05-12",
						"queenSpotted": false,
						"broodspotted": "no",
						"honeyStores_kg": "0",
						"hiveHealth": "poor",
						"comments": "None"
					},
					{
						"_id": "63cbd3510222e05f54ff125f",
						"parent_id": "63cbd3510222e05f54ff125c",
						"inspectionDate": "2021-12-12",
						"queenSpotted": true,
						"broodspotted": "no",
						"honeyStores_kg": "5",
						"hiveHealth": "ok",
						"comments": "None"
					},
					{
						"_id": "63cbd3510222e05f54ff1260",
						"parent_id": "63cbd3510222e05f54ff125c",
						"inspectionDate": "2022-05-12",
						"queenSpotted": true,
						"broodspotted": "no",
						"honeyStores_kg": "10",
						"hiveHealth": "good",
						"comments": "None"
					}
				]
			},
			{
				"_id": "63cbd3510222e05f54ff125d",
				"parent_id": "63cbd3510222e05f54ff1258",
				"name": "Colony 2",
				"queenName": "Liz",
				"queenBirthMonth": "2022-06-01",
				"inspections": [
					{
						"_id": "63cbd3510222e05f54ff1261",
						"parent_id": "63cbd3510222e05f54ff125d",
						"inspectionDate": "2021-05-12",
						"queenSpotted": false,
						"broodspotted": "no",
						"honeyStores_kg": "0",
						"hiveHealth": "poor",
						"comments": "None"
					},
					{
						"_id": "63cbd3510222e05f54ff1262",
						"parent_id": "63cbd3510222e05f54ff125d",
						"inspectionDate": "2021-12-12",
						"queenSpotted": true,
						"broodspotted": "no",
						"honeyStores_kg": "5",
						"hiveHealth": "ok",
						"comments": "None"
					},
					{
						"_id": "63cbd3510222e05f54ff1263",
						"parent_id": "63cbd3510222e05f54ff125d",
						"inspectionDate": "2022-05-12",
						"queenSpotted": true,
						"broodspotted": "no",
						"honeyStores_kg": "10",
						"hiveHealth": "good",
						"comments": "None"
					}
				]
			}
		]
	},
	{
		"_id": "63cbd3510222e05f54ff1259",
		"name": "Michael's Apiary",
		"address": "123 Michael's House",
		"colonies": []
	},
	{
		"_id": "63cbd3510222e05f54ff125a",
		"name": "Larry's Apiary",
		"address": "123 Larry's House",
		"colonies": []
	},
	{
		"_id": "63cbd3510222e05f54ff125b",
		"name": "Josh's Apiary",
		"address": "123 Josh's House",
		"colonies": []
	}]);

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