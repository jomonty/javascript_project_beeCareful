import { useState } from 'react'
import { addInspection } from '../services/BeeService'


const InspectionForm = () => {

    const [date,setDate] = useState("")
    const [queenSpotted,setQueenSpotted] = useState("")
    const [broodSpotted,setBroodSpotted] = useState("")
    const [honey,setHoney] = useState(0)
    const [hiveHealth,setHiveHealth] = useState("")
    const [comments,setComments] = useState("")

    const handleDateChange = (event) => {
        setDate(event.target.value)
    }

    const handleQueenSpotted = (event) => {
        setQueenSpotted(event.target.value)
    }

    const handleBroodSpotted = (event) => {
        setBroodSpotted(event.target.value)
    }

    const handleHoney = (event) => {
        setHoney(event.target.value)
    }

    const handleHiveHealth = (event) => {
        setHiveHealth(event.target.value)
    }

    const resetForm = () => {
        setDate('')
        setQueenSpotted('')
        setBroodSpotted('')
        setHoney('')
        setHiveHealth('')
        setComments('')
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const payload = {
            date,
            queenSpotted,
            broodSpotted,
            honey,
            hiveHealth,
            comments
        }

        addInspection(payload)

        resetForm;
    }




    return (
        <form>
            <input type="text" value={date} placeholder="name" name="name" onChange={handleNameChange}/>
            <input type="text" value={queenSpotted} placeholder="Was queen spotted?" name="queenName" onChange={handleQueenNameChange}/>
            <input type="dropdown" value={broodSpotted} placeholder="Brood Spotted?" name="queenBirthMonth" onChange={handleQueenBirthMonthChange}/>
            <button type="submit" onClick={handleSubmit}>Add Colony</button>
        </form>
    )
}

export default InspectionForm;