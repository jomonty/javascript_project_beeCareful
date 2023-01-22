import SingleColony from "./SingleColony"

const ColonyCard = ({colony,index}) => {
    return (
        <ul>
            <li>
                Colony Name: {colony.name}<br/>
                Queen Name: {colony.queenName}
            </li>
        </ul>
    )
}

export default ColonyCard