import {useState} from 'react';
import './NewColonyForm.css'

const NewColonyForm = ({ addColony }) => {

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

    // Set a reset function to reset the useState
    const resetForm = () => {
        setName('')
        setQueenName('')
        setQueenBirthMonth('')
    }

    // Handle data when submit the form
    const handleSubmit =(event) => {
        event.preventDefault();
        const payload = {
            name,
            queenName,
            queenBirthMonth
        }

        addColony(payload)

        resetForm()
    }


    return (
        <form className="form-wrapper">
            <div className="input-wrapper">
                <input type="text" value={name} placeholder="Name" name="name" onChange={handleNameChange} className="input"/>
                <input type="text" value={queenName} placeholder="Queen's name" name="queenName" onChange={handleQueenNameChange}/>
                <input type="date" value={queenBirthMonth} placeholder="Queen's DOB" name="queenBirthMonth" onChange={handleQueenBirthMonthChange}/>
            </div>
            <button type="submit" onClick={handleSubmit} className="btn-add-colony">Add Colony</button>
        </form>
    )
}

export default NewColonyForm;


