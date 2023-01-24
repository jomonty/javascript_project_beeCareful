import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
// import './NewColonyForm.css'

const EditColony = ({ apiaryData, editColony}) => {
    
    const Navigate = useNavigate();
    const { col_id } = useParams();

    const emptyCol = {
        _id: "",
        parent_id: "",
        name: "",
        queenName: "",
        queenBirthMonth: ""
    }

    const [colUpdate, setColUpdate] = useState({
        _id: "",
        parent_id: "",
        name: "",
        queenName: "",
        queenBirthMonth: ""
    });

    const [name,setName] = useState("")
    const [queenName,setQueenName] = useState("")
    const [queenBirthMonth, setQueenBirthMonth] = useState("");
    


    useEffect(() => {
        if (apiaryData) {
            const col = apiaryData.colonies
            .filter(colony => colony._id === col_id)
            .at(0);
            setColUpdate(col);
        }
    }, [apiaryData])

    const handleNameChange = (event) => {
        const copyColUpdate = {...colUpdate};
        copyColUpdate.name = event.target.value;
        setColUpdate(copyColUpdate);
    }

    const handleQueenNameChange = (event) => {
        const copyColUpdate = {...colUpdate};
        copyColUpdate.queenName = event.target.value;
        setColUpdate(copyColUpdate);
    }

    const handleQueenBirthMonthChange = (event) => {
        const copyColUpdate = {...colUpdate};
        copyColUpdate.queenBirthMonth = `${event.target.value}`;
        setColUpdate(copyColUpdate);
    }

    const resetForm = () => {
        const copyEmptyCol = {...emptyCol};
        setColUpdate(copyEmptyCol);
    }

    const handleSubmit =(event) => {
        event.preventDefault();
        editColony(colUpdate.parent_id, colUpdate._id, colUpdate);
        resetForm();
        Navigate('/colonies')
    }


    return (
        <form className="form-wrapper">
            <div className="input-wrapper">

            <input 
                type="text" 
                value={colUpdate.name} 
                // placeholder={''} 
                name="name" 
                onChange={handleNameChange}
            />

            <input 
                type="text" 
                value={colUpdate.queenName} 
                // placeholder={''} 
                name="queenName" 
                onChange={handleQueenNameChange}
            />

            <input 
                type="date" 
                value={colUpdate.queenBirthMonth} 
                // placeholder={''} 
                name="queenBirthMonth" 
                onChange={handleQueenBirthMonthChange} 
                // onFocus={(e) => (e.target.type = "date")}
            />

            </div>
            <button type="submit" onClick={handleSubmit} className="btn-add-colony">
                Confirm
            </button>
        </form>
    )
}

export default EditColony;