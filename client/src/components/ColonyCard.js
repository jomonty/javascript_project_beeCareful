import { Link } from 'react-router-dom'
import SingleColony from "./SingleColony"
import BeeServices from '../services/BeeService'


const ColonyCard = ({colony,index, setSelectedColony}) => {

    // const findTheColony = async() =>{

    //     // const data = await BeeServices.getApiaries()

    //     const findColony = data.map(element => {
    //         return (element['colonies'].find(colonyElement => colonyElement['name'] === colony.name))
    //     });

    //     return findColony[0]
    // }
=======

    
    
    // const handleClick = async() => {
    //     const theColony = await findTheColony()
    //     BeeServices.deleteColonies(theColony.parent_id, theColony._id)
    //     window.location.reload(false)
    // }

    const handleSelect = () => {
        setSelectedColony(colony._id)
    }

    return (
        
            <li>
                
                <Link to={`/colony?id=${colony._id}`}>Colony Name: {colony.name} </Link>
                {/* Colony Name: {colony.name} */}
                <br/>
                Queen Name: {colony.queenName}<br/>
                {/* <button onClick={handleClick}>Remove Colony</button> */}
            </li>
        
    )
}

export default ColonyCard