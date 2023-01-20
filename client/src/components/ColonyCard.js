

const ColonyCard = (colony, deleteColony) => {
    return (
        <>
            <h1>Colony name: {colony.colonyName}</h1>
            <p>Queen: {colony.queen}</p>
            <p>Queen Age: {colony.queenDOB}</p>
            <p>Hive Health: {colony.hiveHealth}</p>
            <p>Last inspected:</p>
        </>
    )
}

export default ColonyCard