import ColonyList from "./ColonyList";


const SingleColony = ( colony, weather ) => {
    return (
        <>
            <h1>{colony.name}</h1>
            <p>Queen name: {colony.queenName}</p>
            <p>Queen DOB: {colony.queenDOB}</p>
            <p>Queen age: </p>
            
        </>
    )
}

export default SingleColony;