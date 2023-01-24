import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"

const EditInspection = ({ apiaryData, editInspection }) =>{

    const Navigate = useNavigate();
    const { col_id, ins_id } = useParams();

    const emptyInspection = {
        _id: "",
        parent_id: "",
        inspectionDate: "",
        queenSpotted: false,
        broodSpotted: "No",
        honeyStores_kg: 0,
        hiveHealth: "",
        comments: ""
    };

    const [insUpdate, setInsUpdate] = useState({...emptyInspection});

    useEffect(() => {
        if (apiaryData) {
            const colony = apiaryData.colonies
            .filter(colony => colony._id === col_id)
            .at(0)
            const col_index = apiaryData.colonies.indexOf(colony);
            const ins = apiaryData.colonies[col_index].inspections
            .filter(ins => ins._id === ins_id)
            .at(0)
            setInsUpdate(ins);
        }
    }, [apiaryData]);

    const handleInspectionDateChange = (event) => {
        const copyInsUpdate = {...insUpdate};
        copyInsUpdate.inspectionDate = `${event.target.value}`;
        setInsUpdate(copyInsUpdate);
    }

    const handleQueenSpotted = (event) => {
        const copyInsUpdate = {...insUpdate};
        if (event.target.value === "true") {
            copyInsUpdate.queenSpotted = true;
        } else {
            copyInsUpdate.queenSpotted = false;
        }
        setInsUpdate(copyInsUpdate);
    }

    const handleBroodSpotted = (event) => {
        const copyInsUpdate = {...insUpdate};
        copyInsUpdate.broodSpotted = event.target.value;
        setInsUpdate(copyInsUpdate);
    }

    const handleHoney = (event) => {
        const copyInsUpdate = {...insUpdate};
        copyInsUpdate.honeyStores_kg = event.target.value;
        setInsUpdate(copyInsUpdate);
    }

    const handleHiveHealth = (event) => {
        const copyInsUpdate = {...insUpdate};
        copyInsUpdate.hiveHealth = event.target.value;
        setInsUpdate(copyInsUpdate);
    }

    const handleComment = (event) => {
        const copyInsUpdate = {...insUpdate};
        copyInsUpdate.comments = event.target.value;
        setInsUpdate(copyInsUpdate);
    }

    const resetForm = () => {
        setInsUpdate({...emptyInspection});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        editInspection(apiaryData._id, col_id, insUpdate);
        resetForm();
        Navigate(`/colonies/${col_id}`);
    }




    return (
        <form className="form-wrapper">
            <div className="input-wrapper">
                <label htmlFor="ins-date">Inspection Date: </label>
                <input
                    id="ins-date"
                    type="date" 
                    value={insUpdate.inspectionDate} 
                    name="inspection-date" 
                    onChange={handleInspectionDateChange}
                />
                
                <label htmlFor="queen-spotted">Queen Spotted?</label>
                <select
                    id="queen-spotted"
                    value={insUpdate.queenSpotted}
                    name="queenSpotted"
                    onChange={handleQueenSpotted}
                >
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                </select>
                
                <label htmlFor="brood-spotted">Brood Spotted?</label>
                <select
                    id="brood-spotted"
                    value={insUpdate.broodSpotted} 
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
                    value={insUpdate.honeyStores_kg} 
                    name="honey" 
                    onChange={handleHoney}
                />
                
                <label htmlFor="hive-health">Hive Health</label>
                <select
                    id="hive-health"
                    value={insUpdate.hiveHealth}
                    name="hiveHealth"
                    onChange={handleHiveHealth}
                >
                    <option value="good">Good</option>
                    <option value="ok">Ok</option>
                    <option value="poor">Poor</option>
                </select>

                <input 
                    type="text" 
                    value={insUpdate.comments} 
                    name="comments" 
                    onChange={handleComment}
                />
            </div>
            <button type="submit" onClick={handleSubmit} className="btn-add-colony">
                Confirm
            </button>
        </form>
    )
}


export default EditInspection