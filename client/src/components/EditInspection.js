import { useState } from "react"
import { useNavigate } from "react-router-dom"

const EditInspection = ({inspection, updateInspection, selectedColony}) =>{

    const Navigate = useNavigate()

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
            inspectionDate: date,
            queenSpotted: queenSpotted,
            broodSpotted: broodSpotted,
            honeyStores_kg: honey,
            hiveHealth: hiveHealth,
            comments: comments
        }

        updateInspection(payload, selectedColony)
        Navigate('/colonies')
        resetForm();
    }




    return (
        <form>
            <label>Inspection Date: </label><input type="date" value={date} placeholder={inspection.inspectionDate} name="name" onChange={handleDateChange}/>
            <input type="text" value={queenSpotted} placeholder={inspection.queenSpotted} name="queenSpotted" onChange={handleQueenSpotted}/>
            <label>Brood spotted?</label><select value={broodSpotted} placeholder={inspection.broodSpotted} name="broodSpotted" onChange={handleBroodSpotted}>
                <option value="normal">Normal</option>
                <option value="compact">Compact</option>
                <option value="spotty">Spotty</option>
                <option value="No">No</option>
            </select>
            <input type="text" value={honey} placeholder={inspection.honeyStores_kg} name="honey" onChange={handleHoney}/>
            <input type="text" value={hiveHealth} placeholder={inspection.hiveHealth} name="hiveHealth" onChange={handleHiveHealth}/>
            <input type="text" value={comments} placeholder={inspection.comments} name="comments" onChange={handleComment}/>
            <button type="submit" onClick={handleSubmit}>Edit Inspection</button>
        </form>
    )
}


export default EditInspection