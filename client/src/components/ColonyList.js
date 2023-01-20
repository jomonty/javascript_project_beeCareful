import ColonyCard from "./ColonyCard"

const ColonyList = (colonies, deleteColony) => {
    
    const colonyList = colonies.map((colony) => {
        return <ColonyCard colonyName={colonyName} queen={queen} queenDOB={queenDOB} hiveHealth={hiveHealth} key={colony._id} removeColony={removeColony} />
    })
    
    return (
        <>
            {colonyList}
        </>
    )
}

export default ColonyList