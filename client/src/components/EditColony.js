import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import './NewColonyForm.css'

const EditColony = ({ colonyData, updateColony}) => {
    const Navigate = useNavigate()

    const [name,setName] = useState("")
    const [queenName,setQueenName] = useState("")
    const [queenBirthMonth, setQueenBirthMonth] = useState("");
    

    const handleNameChange = (event) => {
    setName(event.target.value)
      }
    const handleQueenNameChange = (event) => {
    setQueenName(event.target.value)
     }
    const handleQueenBirthMonthChange = (event) => {
    setQueenBirthMonth(`${event.target.value}`)
    }

    const resetForm = () => {
        setName('')
        setQueenName('')
        setQueenBirthMonth('')
    }

    const handleSubmit =(event) => {
        event.preventDefault();
        const payload = {
            name,
            queenName,
            queenBirthMonth
        }

        updateColony(payload)
        Navigate('/colonies')
        resetForm()
    }


    return (
        <form className="form-wrapper">
            <div className="input-wrapper">
            <input type="text" value={name} placeholder={colonyData.name} name="name" onChange={handleNameChange}/>
            <input type="text" value={queenName} placeholder={colonyData.queenName} name="queenName" onChange={handleQueenNameChange}/>
            <input type="text" value={queenBirthMonth} placeholder={colonyData.queenBirthMonth} name="queenBirthMonth" onChange={handleQueenBirthMonthChange} onFocus={(e) => (e.target.type = "date")}/>
            </div>
            <button type="submit" onClick={handleSubmit} className="btn-add-colony">Add Colony</button>
        </form>
    )
}

export default EditColony;