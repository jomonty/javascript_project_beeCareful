import { useState } from 'react';
import './NewColonyForm.css'

const NewColonyForm = ({ addColony }) => {

    const emptyColony = {
        name: "",
        queenName: "",
        queenBirthMonth: ""
    };

    const [newColony, setNewColony] = useState({...emptyColony});
 
    const handleNameChange = (event) => {
        const copyNewColony = {...newColony};
        copyNewColony.name = event.target.value;
        setNewColony(copyNewColony);
    }

    const handleQueenNameChange = (event) => {
        const copyNewColony = {...newColony};
        copyNewColony.queenName = event.target.value;
        setNewColony(copyNewColony);
    }

    const handleQueenBirthMonthChange = (event) => {
        const copyNewColony = {...newColony};
        copyNewColony.queenBirthMonth = `${event.target.value}`;
        setNewColony(copyNewColony);
    }

    const resetForm = () => {
        setNewColony({...emptyColony});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        addColony(newColony);
        resetForm();
    }


    return (
        <form className="form-wrapper">
            <div className="input-wrapper">
                <input 
                    type="text" 
                    value={newColony.name} 
                    placeholder="Name" 
                    name="name" 
                    onChange={handleNameChange} 
                    className="input"
                />
                <input 
                    type="text" 
                    value={newColony.queenName} 
                    placeholder="Queen's name" 
                    name="queenName" 
                    onChange={handleQueenNameChange}
                />
                <label>Queen's DOB:</label>
                <input 
                    type="date" 
                    value={newColony.queenBirthMonth} 
                    placeholder="Queen's DOB" 
                    name="queenBirthMonth" 
                    onChange={handleQueenBirthMonthChange}
                />
                <button type="submit" onClick={handleSubmit} className="btn-add-colony">Add Colony</button>
            </div>
            
        </form>
    )
}

export default NewColonyForm;


