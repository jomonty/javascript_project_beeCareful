import { Link } from 'react-router-dom'
import SingleColony from "./SingleColony"

const ColonyCard = ({colony,index}) => {

    const handleClick = () => {
        return
    }
    return (
        <ul>
            <li>
                Colony Name: {colony.name}<br/>
                Queen Name: {colony.queenName}<br/>
                <button onClick={handleClick}>Remove Colony</button>
            </li>
        </ul>
    )
}

export default ColonyCard