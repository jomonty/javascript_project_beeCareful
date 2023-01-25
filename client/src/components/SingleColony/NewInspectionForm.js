import { useState } from 'react'
import './NewInspectionForm.css'

const NewInspectionForm = ({ addInspection, apiary_id, colony_id }) => {

    const emptyInspection = {
        inspectionDate: "",
        queenSpotted: false,
        broodSpotted: "No",
        honeyStores_kg: 0,
        hiveHealth: "good",
        comments: ""
    }

    const [newInspection, setNewInspection] = useState({...emptyInspection});
 
    const handleDateChange = (event) => {
        const copyNewInspection = {...newInspection};
        copyNewInspection.inspectionDate = `${event.target.value}`;
        setNewInspection(copyNewInspection);
    }

    const handleQueenSpotted = (event) => {
        const copyNewInspection = {...newInspection};
        if (event.target.value === "true") {
            copyNewInspection.queenSpotted = true;
        } else {
            copyNewInspection.queenSpotted = false;
        }
        setNewInspection(copyNewInspection);
    }

    const handleBroodSpotted = (event) => {
        const copyNewInspection = {...newInspection};
        copyNewInspection.broodSpotted = event.target.value;
        setNewInspection(copyNewInspection);
    }

    const handleHoney = (event) => {
        const copyNewInspection = {...newInspection};
        copyNewInspection.honeyStores_kg = event.target.value;
        setNewInspection(copyNewInspection);
    }

    const handleHiveHealth = (event) => {
        const copyNewInspection = {...newInspection};
        copyNewInspection.hiveHealth = event.target.value;
        setNewInspection(copyNewInspection);
    }

    const handleComment = (event) => {
        const copyNewInspection = {...newInspection};
        copyNewInspection.comments = event.target.value;
        setNewInspection(copyNewInspection);
    }

    const resetForm = () => {
        setNewInspection({...emptyInspection});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        addInspection(apiary_id, colony_id, newInspection)
        resetForm();
    }

    return (
        <form className='form-wrapper-insp'>
           <div className='input-wrapper-insp'>

            <label htmlFor="ins-date">Inspection Date: </label>
            <input 
                id="ins-date"
                type="date" 
                value={newInspection.inspectionDate} 
                name="inspectionDate" 
                onChange={handleDateChange}
            />

            <label htmlFor="queen-spotted">Queen Spotted?</label>
            <select 
                id="queen-spotted"
                value={newInspection.queenSpotted}
                name="queenSpotted"
                onChange={handleQueenSpotted}
            >
                <option value="true">Yes</option>
                <option value="false">No</option>
            </select>

            <label htmlFor="brood-spotted">Brood Spotted?</label>
            <select 
                id="brood-spotted"
                value={newInspection.broodSpotted} 
                name="broodSpotted" 
                onChange={handleBroodSpotted}
            >
                <option value="normal">Normal</option>
                <option value="compact">Compact</option>
                <option value="spotty">Spotty</option>
                <option value="No">No</option>
            </select>

            <label htmlFor="honey-stores">Honey Stores (kg)</label>
            <input 
                id="honey-stores"
                type="number" 
                value={newInspection.honeyStores_kg} 
                placeholder="Honey [kg]" 
                name="honey" 
                onChange={handleHoney}
            />

            <label htmlFor="hive-health">Hive Health</label>
            <select
                id="hive-health"
                value={newInspection.hiveHealth}
                name="hiveHealth"
                onChange={handleHiveHealth}
            >
                <option value="good">Good</option>
                <option value="ok">Ok</option>
                <option value="poor">Poor</option>
            </select>

            <input 
                type="text" 
                value={newInspection.comments} 
                placeholder="Comments" 
                name="comments" 
                onChange={handleComment}
            />
            </div>
            <button type="submit" onClick={handleSubmit} className="btn-add-colony">Add Inspection</button>
        </form>
    )
}

export default NewInspectionForm;