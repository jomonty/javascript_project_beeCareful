import { useState } from 'react'
import { addInspection } from '../services/BeeService'


const NewInspectionForm = ({addInspection}) => {

    const [date,setDate] = useState("")
    const [queenSpotted,setQueenSpotted] = useState("")
    const [broodSpotted,setBroodSpotted] = useState("")
    const [honey,setHoney] = useState("")
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

    const handleComment = (event) => {
        setComments(event.target.value)
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

        resetForm();
    }




    return (
        <form>
            <label>Inspection Date: </label><input type="date" value={date} placeholder="name" name="name" onChange={handleDateChange}/>
            <input type="text" value={queenSpotted} placeholder="Was queen spotted?" name="queenSpotted" onChange={handleQueenSpotted}/>
            <label>Brood spotted?</label><select value={broodSpotted} placeholder="Brood Spotted?" name="broodSpotted" onChange={handleBroodSpotted}>
                <option value="normal">Normal</option>
                <option value="compact">Compact</option>
                <option valie="spotty">Spotty</option>
                <option value="No">No</option>
            </select>
            <input type="text" value={honey} placeholder="Honey [kg]" name="honey" onChange={handleHoney}/>
            <input type="text" value={hiveHealth} placeholder="What's the hive health?" name="hiveHealth" onChange={handleHiveHealth}/>
            <input type="text" value={comments} placeholder="Comments" name="comments" onChange={handleComment}/>
            <button type="submit" onClick={handleSubmit}>Add Colony</button>
        </form>
    )
}

export default NewInspectionForm;